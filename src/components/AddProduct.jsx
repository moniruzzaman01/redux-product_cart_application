import { useDispatch } from "react-redux";
import { add } from "../redux/products/actions";

export default function AddProduct() {
  const dispatch = useDispatch();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const productCategory = e.target.productCategory.value;
    const productImage = e.target.productImage.value;
    const productPrice = e.target.productPrice.value;
    const totalQty = e.target.totalQty.value;
    dispatch(
      add({
        productName,
        productCategory,
        productImage,
        productPrice,
        totalQty,
      })
    );
    e.target.reset();
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleAddProduct}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              name="productName"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              name="productCategory"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              name="productImage"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                name="productPrice"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                name="totalQty"
              />
            </div>
          </div>
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
