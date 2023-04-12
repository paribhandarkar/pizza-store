import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PizzaDisplay from "./components/PizzaDisplay/PizzaDisplay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PizzaDisplay />
    </div>
  );
}

export default App;
