import { EMPLOYEES_ACTION_TYPES as t } from "../Actions/Types";

export default (state = {/* Initial State */}, action) => {
  switch (action.type) {
  case t.GET_ALL_REQUEST:
    return {
      ...state,
      working: true
    };
  case t.GET_ALL_SUCCESS:
    return {
      ...state,
      data: action.data,
      working: false
    };
  case t.GET_ALL_FAILURE:
    return {
      ...state,
      working: false,
      error: action.error
    };
  default:
    return state;
  }
};
