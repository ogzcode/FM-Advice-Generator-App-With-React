import { useEffect, useState } from 'react';
import './App.css';
import dice from "./img/icon-dice.svg";
import divider from "./img/pattern-divider-desktop.svg";

function App(){
  const [advice, setAdvice] = useState(0);

  function handleClick(){
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then((data) => {
          setAdvice(data.slip);
      })
      .catch(() => setAdvice({"id": 1, "advice": "Hello World"}));
  }
  
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then((data) => {
          setAdvice(data.slip);
      })
      .catch(() => setAdvice({"id": 1, "advice": "Hello World"}));
  }, []);

  return (
    <div className='container'>
      <p className='header'>Advice #{advice.id}</p>
      <p className='advice'>"{advice.advice}"</p>
      <img src={divider} className="divider" alt='This is divider'/>
      <button className='btn' onClick={() => handleClick()}>
        <img src={dice} alt="This is button"/>
      </button>
    </div>
  );
}

export default App;
