import { ADDRESS, CART_ITEM, WISHLIST_ITEM } from "./actions";

const initState = {
  cartItem: [],
  wishlist: [],
  Address: [],
  calculateTotalPrice: 0,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CART_ITEM:
      return {
        ...state,
        cartItem: payload,
      };
    case WISHLIST_ITEM:
      return {
        ...state,
        wishlist: payload,
      };
    case ADDRESS:
      return {
        ...state,
        Address: payload,
      };

    default:
      return state;
  }
};
