import './App.css';
import { Alert } from './components/Alert';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode is now enabled","success")
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode is now enabled","success")

    }
  }
  return (
    <>

      <Navbar title="TextUtiles" aboutText="About us" mode={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} />
      <div className='container my-3'>
      <Textform showAlert={showAlert} heading="Analyze your text here" mode={mode}/>
      </div>
    </>
  );
}

export default App;
