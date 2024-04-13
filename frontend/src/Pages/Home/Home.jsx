import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import Carta from "../../Components/Carta/Carta";

function Home() {
  return (
    <div className="bodyApp">
      <Header />
      <Carta />
      <Footer />
    </div>
  );
}


export default Home;