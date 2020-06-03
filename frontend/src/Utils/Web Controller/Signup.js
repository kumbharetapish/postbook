import Axios from "axios";

const SignupUser = (user) => {
  console.log(user);

  Axios.post("http://localhost:8000/api/diatoz/v0/users/signup", user)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
};

export default SignupUser;
