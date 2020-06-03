import Axios from "axios";

const getPost = async () => {
  let getData = await Axios.get("http://localhost:8000/api/diatoz/v0/posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Processor failed invalid outputs", error);
      return Promise.reject({ error });
    });
  return Promise.resolve(getData);
};
export default getPost;
