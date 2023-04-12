import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PizzaDisplay from "./components/PizzaDisplay/PizzaDisplay";
import { PizzaProvider } from "./context/PizzaContext";

function App() {
  return (
    <PizzaProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <PizzaDisplay />
      </div>
    </PizzaProvider>
  );
}

export default App;
