import React from 'react';
import './App.css';

const Game = (props: any) => {
  return <h1>I love {props.fav}</h1>;
};

function User(props: any) {
  return (
    <div>
      <h1>I love {props.fav}</h1>
      <h1>I love {props.fav}</h1>
    </div>
  );
}

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
    {}
  </div>
);
export default App;
