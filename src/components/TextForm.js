import React, {useState} from 'react'

export default function TextForm(props) {  
    const handleUpperCaseClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Upper Case","success")
    } 
    const handleLowerCaseClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text is converted to Lower Case","success")
   
    } 
    const handleClearTextClick=()=>{
        setText("")
        props.showAlert("Text is Cleared","success")
   
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    } 
    const handleCopy=()=>{
        var text = document.getElementById('myBox');// This is to go the element
        text.select();// This is to  show the text is selected// first and second line is optional. It actually creates a view in textarea that some text is selected and copied
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is Copied to Clipboard","success")
   
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space is cleared","success")
   
    }
const [text,setText] = useState('')
// setText("New Text")
  return (
      <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" placeholder ="Enter text here" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743',placeholderTextColor:props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" onChange={handleOnChange} rows="10"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpperCaseClick}> Convert to UpperCase</button>
  <button className='btn btn-primary mx-2' onClick={handleLowerCaseClick}> Convert to LowerCase</button>
  <button className='btn btn-primary mx-2' onClick={handleClearTextClick}>Clear</button>
  <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
 
  </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2> Your Text Summary</h2>
      <p>{text.length===0? 0 :text.trim().split(' ').length} words {text.length} characters</p>
      <p>{0.008 * (text.length===0? 0 : text.trim().split(' ').length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Please Enter your text in textbox above to preview it'}</p>
  </div>
  </>
  )
}

