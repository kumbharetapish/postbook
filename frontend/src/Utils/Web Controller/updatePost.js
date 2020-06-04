import Axios from "axios";

const updatePost = async (id, body) => {
  let getData = await Axios.patch(
    `http://localhost:8000/api/diatoz/v0/posts/${id}`,
    body
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Processor failed invalid outputs", error);
      return Promise.reject({ error });
    });
  return Promise.resolve(getData);
};

export default updatePost;