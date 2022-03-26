import React, { useState } from "react";

export default function About(props) {
    const  [myStyle,setMyStyle]= useState({
        backgroundColor:'white',
        color:'black',
    })
    const [btnText,setBtnText]=useState('Enable Dark Mode')
    const toggleMode =()=>{
        if(myStyle.color==="black"){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border :"1px solid white"
            })
            setBtnText('Enable Light Mode');
        }else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText('Enable Dark Mode');
        }
    }
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button" 
              style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             TextUtils - Work with your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#28282d':'white',color:props.mode==='dark'?'white':'#042743'}}>
              <strong>A Utility to your Text</strong> TextUtils is designed to make manipulating text easier. We have provided deifferent utilities like changing cases, remove extra spaces and copying the content.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button type="button" onClick={toggleMode} className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  );
}
