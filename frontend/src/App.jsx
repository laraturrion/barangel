import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import Carta from "./Components/Carta";

function App() {
  return (
    <div className="bodyApp">
      <Header />
      <Carta />
      <Footer />
    </div>
  );
}

export default App;
