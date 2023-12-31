import "./App.css";
import CartContainer from "./components/CartContainer";
import ProductsContainer from "./components/ProductsContainer";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Navbar setShow={setShow} />
      {show ? <ProductsContainer /> : <CartContainer />}
    </div>
  );
}

export default App;
