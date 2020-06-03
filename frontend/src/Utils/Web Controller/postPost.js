import Axios from "axios";

const postPosts = (post) => {
  Axios.post("http://localhost:8000/api/diatoz/v0/posts/", post)
    .then((response) => {
      alert("Post Successfully.");
    })
    .catch((err) => console.log(err));
};

export default postPosts;
