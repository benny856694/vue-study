import Axios from "axios";

export default Axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty",
  params: { key: "AIzaSyD9kQFHRZAM-LFL8P3PCC9I7Pvglh-e5Yg" }
});
