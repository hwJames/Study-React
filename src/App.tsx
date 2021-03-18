import './App.css';

function Game(props: any) { 
	return <h1>I love {props.fav}</h1>;
}


function App() {
  return (
    <div className="App">
      Hello World!
    	<Game fav="LOL"/>
    </div>
  );
}
export default App;
