import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";

const myReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  register: registerReducer,
});

export default myReducer;
