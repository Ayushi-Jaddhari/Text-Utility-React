import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import  React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
const [mode,setMode] = useState('light')
const [alert,setAlert]=useState(null);
const showAlert =(message,type)=>{
setAlert(
  {
    msg: message,
    type:type
  }
)
setTimeout(()=>{
  setAlert(null)
},1500)
}
const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='#042743'
    showAlert("Dark Mode has been enabled","success")
  }else{
    document.body.style.backgroundColor ='white'
    setMode('light')
    showAlert("Light Mode has been enabled","success")
  }
}
  return (
   <>
   <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<Routes>
          <Route exact path="/about"  element={ <About mode={mode}/>}>
          </Route>
         
          <Route exact path="/" element={
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}>

          </Route>
        </Routes>
       
</div>
</Router>
<Footer mode={mode}/>
   </>
  );
}


export default App;

