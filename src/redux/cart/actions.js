import { ADDTOCART, DECREASEQTY, DELETEFROMCART } from "./actionTypes";

export const addToCart = (productData) => {
  return {
    type: ADDTOCART,
    payload: { productData },
  };
};
export const decreaseQty = (productId) => {
  return {
    type: DECREASEQTY,
    payload: { productId },
  };
};
export const deleteFromCart = (productId) => {
  return {
    type: DELETEFROMCART,
    payload: { productId },
  };
};
