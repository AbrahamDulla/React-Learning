import "./App.css";
import AppBar from "./Components/AppBar";
import Greet from "./Components/greet";
import Hello from "./Components/hello";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Greet />
      <Hello />
    </div>
  );
}

export default App;
