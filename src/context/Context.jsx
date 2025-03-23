import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [Input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevousPromt, setPreviusPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

   
    const delayPara = (indx, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord); 
        }, 75 * indx);
    };
      
    const newChat =()=>{
        setLoading(false);
        setShowResult(false);

    }
    const onSent = async (promt) => {
        setResultData(""); 
        setShowResult(true);
        setLoading(true);
        let response;
        // const usedPrompt = promt ?? Input;
        // setRecentPrompt(usedPrompt);
        // setPreviusPrompt(prev => [...prev, usedPrompt]);
    
        // const response = await run(usedPrompt);
        if(promt !=undefined){
            response = await run(promt)
            setRecentPrompt(promt);

        }else{
            setPreviusPrompt(prev => [...prev,Input])
            setRecentPrompt(Input);
            response = await run(Input);
        }
    
       
        let responseArray = response.split("**");
        let newArray = responseArray.map((item, i) =>
            i % 2 === 0 ? item : `<b>${item}</b>`
        ).join("");
    
       
        let newArray2 = newArray.split("*").join("<br>");
    
        let words = newArray2.split(" ");
    
        words.forEach((word, i) => {
            delayPara(i, word + " ");
        });
    
        setInput("");
        setLoading(false);
    };
    

    const contextValue = {
        recentPrompt,
        resultData,
        prevousPromt,
        setPreviusPrompt,
        onSent,
        setRecentPrompt,
        showResult,
        loading,
        Input,

        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
