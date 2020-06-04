import Axios from "axios";

const getUser = async (email) => {
  let getuser = await Axios.get(
    "http://localhost:8000/api/diatoz/v0/users/" + email
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("invalid outputs", error);
      return Promise.reject({ error });
    });
  return Promise.resolve(getuser);
};

export default getUser;
