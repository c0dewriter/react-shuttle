import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTodos } from "../Core/Redux/Actions/Todos";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    if (!todos.data)
      dispatch(getAllTodos());
  }, [todos.data]);

  return (
    <div>
      {JSON.stringify(todos)}
    </div>
  );
};

export { Todos };
