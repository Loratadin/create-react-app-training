import React, { useState } from "react";
import "./input.css";

const Input = () => {
    const [ inputText, setInputText ] = useState("")
    return (
        <div className="input__container">
            <input
                onChange={e => { setInputText(e.target.value)}}
                placeholder="Enter a user name"
                className="input"
            />
            <div className="input-reflection">{inputText}</div>
        </div>
    )
}
export default Input;