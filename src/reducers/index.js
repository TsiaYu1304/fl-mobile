import { combineReducers } from "redux";

import { frontReducer } from "./frontRedecer";

const reducerApp = combineReducers({
  frontReducer,
});

export default reducerApp;
