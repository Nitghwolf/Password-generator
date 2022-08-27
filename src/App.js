import { useState } from 'react';
import './App.css';
import InputCheckbox from './components/InputCheckbox';
import InputNumber from './components/InputNumber';
import ResultContainer from './components/ResultContainer';
import { copyPassword, generatePassword } from './helper';

function App() {

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const [resultEl, setResultEl] = useState("");
  const [length, setLength] = useState(20);



  function generate(){
    const password = generatePassword(lowercase, uppercase, numbers, symbols, length);
    setResultEl(password.toString());
  }

  return (
    <div className="container">
        <h2>Password Generator</h2>
        <ResultContainer resultEl={resultEl} copyPassword={() => copyPassword(resultEl)} />
      <div className="settings">
        <InputNumber label={"Password Length"} length={length} onChange={setLength} />
        <InputCheckbox label={"Include uppercase letters"} checked={uppercase} onChange={setUppercase} />
        <InputCheckbox label={"Include lowercase letters"} checked={lowercase} onChange={setLowercase} />
        <InputCheckbox label={"Include numbers"} checked={numbers} onChange={setNumbers} />
        <InputCheckbox label={"Include symbols"} checked={symbols} onChange={setSymbols} />
      </div>

      <button className="btn btn-large" id="generate" onClick={generate}>
        Generate Password
      </button>
    </div>
  );
}

export default App;