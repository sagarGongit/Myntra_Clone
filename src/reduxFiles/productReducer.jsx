import { GET_PRODUCTS, SPECIAL_CATEGORIES } from "./actions";

const initState = {
  products: [],
  specialCategory: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SPECIAL_CATEGORIES:
      return {
        ...state,
        specialCategory: payload,
      };
    default:
      return state;
  }
};
