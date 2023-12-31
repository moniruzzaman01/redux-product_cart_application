import "./App.css";
import CartContainer from "./components/CartContainer";
import ProductsContainer from "./components/ProductsContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ProductsContainer />
      <CartContainer />
    </div>
  );
}

export default App;
