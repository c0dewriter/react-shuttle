import { TODOS_ACTION_TYPES as t } from "./Types";
import { getAll } from "../Services/Todos";

const getAllTodos = () => {
  return dispatch => {
    dispatch(request());
    getAll()
      .then(
        todos =>
          dispatch(success(todos)),
        error => {
          dispatch(failure(error));
          console.log(error);
        }
      );
  };

  function request() {
    return { type: t.GET_ALL_REQUEST };
  }
  function success() {
    return { type: t.GET_ALL_SUCCESS };
  }
  function failure(error) {
    return { type: t.GET_ALL_FAILURE, error };
  }
};

export { getAllTodos };
