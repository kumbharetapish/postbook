import Axios from "axios";

export function loadUser(user) {
  return (dispatch) => {
    return Axios.get(
      "http://localhost:8000/api/diatoz/v0/users?email=" + user.email
    ).then((response) => {
      if (response.data[0] !== undefined) {
        console.log(response.data[0]);
        dispatch(userLogin(response.data[0]));
      }
    });
  };
}

export function userLogin(user) {
  return {
    type: "USER_LOGIN",
    user: user,
  };
}
