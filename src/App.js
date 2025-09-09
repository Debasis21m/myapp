import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import About from './components/About';
import { HashRouter as Router,
  Routes,
  Route } from 'react-router-dom';

function App() {
  let [mode, setMode] = useState("light");
  const toggle = () => {
    console.log("Toggle clicked");
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }
    const color = (clr) => {
    console.log("color");
    document.body.style.backgroundColor = clr;
  }
  return (
<>
{/* <Navbar title="MyNav" toggle={toggle} mode={mode} color={color}/>
<Form/>
<About/> */}
  <Router>
    <Navbar title="MyNav" toggle={toggle} mode={mode} color={color}/>
  <Routes>
    <Route path="/" element={<Form />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </Router>
</>
  );
}

export default App;
