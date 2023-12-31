import { ADDPRODUCT } from "./actionTypes";

export const add = (productData) => {
  return {
    type: ADDPRODUCT,
    payload: { productData },
  };
};
