import React from 'react'

export default function Footer(props) {
  return (
    <div className="w-100 p-1 position-absolute bottom-0 text-center"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}>&#169; Copy Right Reserved {new Date().getFullYear()}</div>
  )
}
