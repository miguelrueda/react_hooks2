import React, { useState } from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return <div><input placeholder="Enter some text"
        onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value])
        }} /><br />
        {inputText}
        <hr />
        <br />
        <ul>
            {historyList.map((h) => {
                return <div>{h}</div>}
            )}
        </ul>
    </div>
};

export default InputElement;