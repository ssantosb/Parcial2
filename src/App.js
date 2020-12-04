import "./App.css";

import Graph from "./components/graph";

import Pokemons from "./components/pokemons";

function App(props) {
  return (
    <div>
      <Pokemons data={props.data} lang={props.lang} />
      <Graph data={props.data} />
    </div>
  );
}

export default App;
