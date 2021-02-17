import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import employees from "./Reducers/Employees";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  employees: employees
});


export default createRootReducer;
