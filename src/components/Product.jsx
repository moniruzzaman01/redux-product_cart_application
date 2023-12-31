import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/actions";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {
    productId,
    productName,
    productImage,
    productCategory,
    productPrice,
    totalQty,
  } = product;
  const availableQty =
    totalQty - (cart.find((c) => c.productId == productId)?.orderedQty || 0);

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
            QTY <span className="lws-quantity">{availableQty}</span>
          </p>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
