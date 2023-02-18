import "./App.css";
import AppBar from "./Components/AppBar";
import SetCount from "./Components/setCount";
import Hello from "./Components/login";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Hello />
      <SetCount />
    </div>
  );
}

export default App;
