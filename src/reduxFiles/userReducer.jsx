import { LOGIN, LOGOUT } from "./actions";

let initState = {
  user: window.localStorage.getItem("Auth")
    ? JSON.parse(localStorage.getItem("Auth"))
    : {
        isLogged: false,
        username: "",
        token: null,
        userId: null,
      },
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: {
          isLogged: true,
          username: payload.username,
          token: payload.token,
          userId: payload.userId,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: { isLogged: false, username: "", token: null, userId: null },
      };
    default:
      return state;
  }
};
