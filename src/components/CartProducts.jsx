import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function CartProducts() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="space-y-6">
      {cartProducts.map((cp, key) => (
        <CartProduct key={key} productData={cp} />
      ))}
    </div>
  );
}
