import AddProduct from "./AddProduct";
import Products from "./Products";

export default function ProductsContainer() {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Added Products</h2>
        <div className="productWrapper">
          <Products />
          <AddProduct />
        </div>
      </div>
    </main>
  );
}
