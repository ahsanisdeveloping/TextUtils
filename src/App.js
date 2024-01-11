import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = ' #212529'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      showAlert("Light mode has been enabled","success")
      document.body.style.backgroundColor = ' white'
    }
  }
  const [alert,setAlert] = useState(null)
  const [mode,setMode] = useState("light")
  const showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  return (
    <>
{/* <Navbar  title="Ahsan" /> */}
<Router>
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} mode={mode}/>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}></Route>
          <Route path="/" element={<TextBox mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
        </Router> 


    </>
  );
}

export default App;
