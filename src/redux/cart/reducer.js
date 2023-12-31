import { ADDTOCART, DECREASEQTY, DELETEFROMCART } from "./actionTypes";

const intitialState = [
  // {
  //   productId: 0,
  //   productName: "Spring and summershoes",
  //   productImage: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
  //   productCategory: "Mens shoes",
  //   productPrice: 400,
  //   availableQty: 1,
  //   orderedQty: 1,
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
            availableQty: action.payload.productData.totalQty - 1,
            orderedQty: 1,
            totalPrice: action.payload.productData.productPrice,
          },
        ];
      } else {
        return state.map((product) => {
          if (
            product.productId == action.payload.productData.productId &&
            product.availableQty > 0
          ) {
            return {
              ...product,
              availableQty: product.availableQty - 1,
              orderedQty: product.orderedQty + 1,
              totalPrice: (product.orderedQty + 1) * product.productPrice,
            };
          }
          return product;
        });
      }
    }

    case DECREASEQTY:
      return state.map((product) => {
        if (
          product.productId == action.payload.productId &&
          product.orderedQty > 0
        ) {
          return {
            ...product,
            availableQty: product.availableQty + 1,
            orderedQty: product.orderedQty - 1,
            totalPrice: (product.orderedQty - 1) * product.productPrice,
          };
        }
        return product;
      });

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
