import React , { useState } from 'react';


function TextArea(){
    let [text,setText] = useState("Type something ...........");
    let handleUpClick =()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }
    let handleOnChange =(event)=>{
        setText(event.target.value);
    }

    return (
        <div className="container mt-5  ">
            <h1 className = "my-5" style = {{fontWeight:"bold"}}>Enter Text Below</h1>
            <textarea
                className="textarea is-info container"
                placeholder="Enter Something Here"
                rows="8"
                value={text}
                onChange = {handleOnChange}
            ></textarea>

            <button type="button" className="btn btn-secondary mt-5" onClick={handleUpClick} >Upper Case</button>
        </div>
    );
}
export default TextArea;