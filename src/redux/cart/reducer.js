import { ADDTOCART, DECREASEQTY, DELETEFROMCART } from "./actionTypes";

const intitialState = [
  // {
  //   productId: 0,
  //   productName: "Spring and summershoes",
  //   productImage: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
  //   productCategory: "Mens shoes",
  //   productPrice: 400,
  //   productQty: 1,
  //   totalPrice: 400,
  // },
];

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      const isAvailable = state.some(
        (product) => product.productId == action.payload.productData.productId
      );
      if (!isAvailable) {
        return [
          ...state,
          {
            ...action.payload.productData,
            productQty: 1,
            totalPrice: action.payload.productData.productPrice,
          },
        ];
      } else {
        return state.map((product) => {
          if (product.productId == action.payload.productData.productId) {
            return {
              ...product,
              productQty: product.productQty + 1,
              totalPrice: (product.productQty + 1) * product.productPrice,
            };
          }
          return product;
        });
      }
    }
    case DECREASEQTY:
      return;
    case DELETEFROMCART: {
      const newState = state.filter(
        (product) => product.productId != action.payload.productId
      );
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
