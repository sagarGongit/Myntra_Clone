export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const WISHLIST_ITEM = "WISHLIST";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const LOADING = "LOADING";
export const SPECIAL_CATEGORIES = "SPECIAL_CATEGORIES";
export const ADDRESS = "ADDRESS";
export const CART_ITEM = "CART_ITEM";

export const cartitem = (item) => {
  return {
    type: CART_ITEM,
    payload: item,
  };
};

export const loading = (payload) => {
  return {
    type: LOADING,
    payload,
  };
};

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN, payload: user });
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const useraddress = (payload) => {
  return {
    type: ADDRESS,
    payload,
  };
};

export const getProduct = (product) => {
  return {
    type: GET_PRODUCTS,
    payload: product,
  };
};

export const wishlistItem = (item) => {
  return {
    type: WISHLIST_ITEM,
    payload: item,
  };
};

export const specialcategory = (category) => {
  return {
    type: SPECIAL_CATEGORIES,
    payload: category,
  };
};
