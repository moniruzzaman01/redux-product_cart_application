import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQty, deleteFromCart } from "../redux/cart/actions";

export default function CartProduct({ productData }) {
  const dispatch = useDispatch();
  const {
    productId,
    productName,
    productImage,
    productCategory,
    productPrice,
    orderedQty,
    totalPrice,
  } = productData;

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={productImage} alt="product" />
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{productCategory}</p>
          <p>
            BDT <span className="lws-cartPrice">{productPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(addToCart(productData))}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{orderedQty}</span>
          <button
            onClick={() => dispatch(decreaseQty(productId))}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{totalPrice}</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => dispatch(deleteFromCart(productId))}
          className="lws-removeFromCart"
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  productData: PropTypes.object,
};
