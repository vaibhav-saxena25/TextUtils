
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  //const [mode,setMode]=useState('dark');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <> 
    
       <Navbar title="TextUtils" aboutText="About TextUtils" />
       <Alert alert={alert}/>
       <div className="container my-3">
       {/* <TextForm heading = "Enter the text to analyze below"/> */}
       <TextForm heading="Try TEXTUTILS for Lowercase | Uppercaseerse | Remove Extra Spaces" showAlert={showAlert} />
       {/* <About/> */}
       </div>
    
    
       
    </>
   
  );
}

export default App;
