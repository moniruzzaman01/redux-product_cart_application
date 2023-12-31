import { ADDTOCART, DECREASEQTY, DELETEFROMCART } from "./actionTypes";

const intitialState = [
  {
    productId: 0,
    productName: "Spring and summershoes",
    productImage: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    productCategory: "Mens shoes",
    productPrice: 400,
    productQty: 1,
    totalPrice: 400,
  },
];

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      const isAvailable = state.some(
        (product) => product.id == action.payload.productData.id
      );
      if (!isAvailable) {
        return [
          ...state,
          {
            ...action.payload.productData,
            productQty: 1,
          },
        ];
      } else {
        return state.map((product) => {
          if (product.id == action.payload.productData.id) {
            return {
              ...product,
              productQty: product.productQty + 1,
              totalPrice: product.productQty * product.productPrice,
            };
          }
          return product;
        });
      }
    }
    case DECREASEQTY:
      return;
    case DELETEFROMCART:
      return;
    default:
      return state;
  }
};

export default reducer;
