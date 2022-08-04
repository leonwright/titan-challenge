import axios from "axios";
export default axios.create({
  baseURL: "localhost:9200/titan",
  headers: {
    "Content-type": "application/json",
  },
});
