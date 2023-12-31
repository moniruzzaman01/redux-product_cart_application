import PropTypes from "prop-types";

export default function Product({ product }) {
  const {
    productName,
    productImage,
    productCategory,
    productPrice,
    productQty,
  } = product;

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={productImage} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{productCategory}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{productPrice}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{productQty}</span>
          </p>
        </div>
        <button className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
