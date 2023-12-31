import { ADDPRODUCT } from "./actionTypes";

export const addProduct = (productData) => {
  return {
    type: ADDPRODUCT,
    payload: { productData },
  };
};
