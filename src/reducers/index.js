import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";
import video from "./videoReducer";

export default combineReducers({
  data,
  auth,
  video
});
