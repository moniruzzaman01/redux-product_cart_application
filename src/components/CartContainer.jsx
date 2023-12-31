import BillDetails from "./BillDetails";
import CartProducts from "./CartProducts";

export default function CartContainer() {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <CartProducts />
          <BillDetails />
        </div>
      </div>
    </main>
  );
}
