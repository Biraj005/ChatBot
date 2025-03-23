import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [Input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState('')
    const [prevousPromt,setPreviusPrompt]=useState([]) 
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resulData,setResultData]=useState('')


    const onSent = async (promt) => {

        await run(promt)
    }
    // onSent("What is reactjs")

    const contextValue = {
        prevousPromt,
        setPreviusPrompt,
        onSent,
        setRecentPrompt,
        showResult,
        loading,
        Input,
        setInput,
        

    }

    return (<Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
    )
}

export default ContextProvider
