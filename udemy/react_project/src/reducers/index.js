import { combineReducers } from "redux";

import countReducer from "./countReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
  count: countReducer,
  login: loginReducer,
});

export default allReducers;
