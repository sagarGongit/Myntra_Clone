import { LOADING } from "./actions";

const initState = {
  isLoading: false,
};

export const loadingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
