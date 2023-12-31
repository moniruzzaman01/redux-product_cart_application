import { ADDPRODUCT } from "./actionTypes";

const initialState = [
  {
    productId: 0,
    productName: "Spring and summershoes",
    productImage: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    productCategory: "Mens shoes",
    productPrice: 400,
    productQty: 15,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          productId: state.length,
          ...action.payload.productData,
        },
      ];
    default:
      return state;
  }
};

export default reducer;
