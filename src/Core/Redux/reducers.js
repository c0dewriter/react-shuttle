import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import todos from "./Reducers/Todos";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  todos: todos
});


export default createRootReducer;
