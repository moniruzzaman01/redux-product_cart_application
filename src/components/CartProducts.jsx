import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const loadCartProducts = (cartProducts) => {
  return cartProducts.map((cp, key) => (
    <CartProduct key={key} productData={cp} />
  ));
};

export default function CartProducts() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="space-y-6">
      {cartProducts.length
        ? loadCartProducts(cartProducts)
        : "No product added yet!!!"}
    </div>
  );
}
