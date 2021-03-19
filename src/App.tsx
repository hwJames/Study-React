import React from 'react';
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

const App = (): JSX.Element => (
  <div className="App">
    Hello World!
    <Game fav="LOL" />
    {test.map((data) => (
      <User key={data.id} id={data.id} name={data.name} />
    ))}
    {}
  </div>
);
export default App;
