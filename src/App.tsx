import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Game = (props: any) => {
  return <h1>I love {props.fav}</h1>;
};

const User = (props: any) => {
  return (
    <div>
      <h1>id : {props.id}</h1>
      <h1>name {props.name}</h1>
    </div>
  );
};

const test = [
  {
    id: 1,
    name: 'test1',
  },
  {
    id: 2,
    name: 'test2',
  },
  {
    id: 3,
    name: 'test3',
  },
];

const App = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('졸라!');
  const onClickLeave = () => setMessage('졸리다!');

  return (
    <div className="App">
      Hello World!
      <button type="button" onClick={onClickEnter}>
        1
      </button>
      <button type="button" onClick={onClickLeave}>
        2
      </button>
      <h1>{message}</h1>
      <Game fav="LOL" />
      {test.map((data) => (
        <User key={data.id} id={data.id} name={data.name} />
      ))}
      {}
    </div>
  );
};
export default App;
