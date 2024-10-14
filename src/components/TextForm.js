import React,{useState} from 'react'

export default function TextForm(props) {

const beautify = ()=>{
  let newText = text.replace(/\n/g,"<br>");
  setText(newText);
  props.showAlert("BEAUTIFIED","success");
}



const inverseText = ()=>{
  let newText = text.split("").reverse().join("");
  setText(newText);
  props.showAlert("INVERTED","success");
}

const handleClear = ()=>{
  setText("");
  props.showAlert("Cleared","success");
  
}

const speak = ()=>{
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("SPEAKED","success");
}
const handleCopy = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("COPIED","success");
}

const removeSpace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("SPACE REMOVED","success");
}

const handleUpOnClick = ()=>{
    
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
    
}

const handleLpOnClick = ()=>{

    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
}
const handleOnChange=(event)=>{
   
    setText(event.target.value);
}
const[text,setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div class="mb-3">
     
           <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
           
       </div>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={handleUpOnClick}>Convert to Upper Case</button>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={handleLpOnClick}>Convert to Lower Case</button>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={speak}>speak it out</button>
       
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={removeSpace}>Remove extra spaces</button>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={beautify}>beautify Text</button>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
       <button disabled = {text.length===0} className = "btn-btn-primary mx-2 my-1" onClick={inverseText}>Inverse Text</button>
     



       


    </div>
    <div className="container my-3">
        <h1>your text summary</h1>
         <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Nothihng to preview"}</p>
  </div>
  </>

  )
}


