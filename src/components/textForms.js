import React,{useState} from 'react'

export default function TextForms(props) {
  const handleOnChange=(event)=>
  {
    console.log("OnChange was clicked"+text);
    setText(event.target.value);
  }
 const handleUpCase=()=>{
  console.log("Uppercase button was clicked");
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert('Converted to uppercase','success');
}
 
 const handleLowCase=()=>{
  console.log("Uppercase button was clicked");
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert('Converted to lowercase','success');

}
 
  const[text,setText]=useState('');
  return (
    <>
  <div className="container">
    <h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',
  color: props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowCase}>Convert to lowercase</button>
  </div>
  
  <div className="container my-3" style={{
    color: props.mode==='dark'?'white':'black'
  }}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  );
}
