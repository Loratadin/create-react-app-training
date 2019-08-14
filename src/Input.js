import React, { useState } from "react";
import "./input.css";

const Input = () => {
    const [inputText, setInputText] = useState("")
    const [ historyList, setHistoryList ] = useState([])
    return (
        <div className="input__container">
            <input
                onChange={e => {
                    setInputText(e.target.value)
                    setHistoryList([...historyList, e.target.value])
                }}
                placeholder="Enter a user name"
                className="input"
            />
            <div className="input-reflection">{inputText}</div>
            <ul>
                {historyList.map(item => (
                    <div>{item}</div>
                ))}
            </ul>
        </div>
    )
}
export default Input;