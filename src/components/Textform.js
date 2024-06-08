import React, { useState } from 'react'

export const Textform = (property) => {
    const handleUpperCase = () => {
        console.log("Upper Case was clicked");
        setText(text.toUpperCase());
        property.showAlert("Converted to Upper Case!","success");
    }
    const handleOnChang = (evnt) => {
        console.log("Text is being updated");
        setText(evnt.target.value);
        
    }
    const handleLowerCase = () => {
        console.log("Lower case button was clicked");
        setText(text.toLocaleLowerCase())
        property.showAlert("Converted to Lower Case!","success");
    }
    const handleClearText = () => {
        setText("")
        property.showAlert("Text Cleared!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        property.showAlert("Extra spaces removed!","success");
    }
    const [text,setText] = useState("Enter your text here")
  return (
    <>
    <div className="container">
    <h3>{property.heading}</h3>
    <div className="mb-3">
    <textarea className="form-control" value={text} 
    onChange={handleOnChang}
    id="myBox" rows="6"></textarea>
    </div>   
    <button className="btn btn-primary mx-2"  
    onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary mx-2" 
    onClick={handleUpperCase}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2"
    onClick={handleLowerCase}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2"
    onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters.</p>
        <p> {text.split("").length * 0.008} will be the time taken to read this.</p>

    </div>
    </>
   
  )
}

export default Textform