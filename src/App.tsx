import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onClickEnter = () => setMessage('졸라!');
  const onClickLeave = () => setMessage('졸리다!');

  const onChange = (e: any) => setInputText(e.target.value);
  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  return (
    <div className="App">
      Hello World!
      <br />
      <button type="button" onClick={onClickEnter}>
        졸라
      </button>
      <button type="button" onClick={onClickLeave}>
        졸리다
      </button>
      <h1>{message}</h1>
      <br />
      <br />
      State Test
      <br />
      <input value={inputText} onChange={onChange} />
      <button type="button" onClick={onClick}>
        추가
      </button>
      <ul>{namesList}</ul>
    </div>
  );
};
export default App;
