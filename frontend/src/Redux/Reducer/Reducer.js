let defaultState = {
  user: {},
  editUser: {},
  user:
    JSON.parse(localStorage.getItem("userData")) === null
      ? {}
      : Boolean(localStorage.getItem("userData")),
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "USER_LOGIN") {
    return {
      ...state,
      user: action.user,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default mainReducer;
