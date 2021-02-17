import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllEmployees } from "../Core/Redux/Actions/Employees";

const Todos = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);

  useEffect(() => {
    if (!employees.data)
      dispatch(getAllEmployees());
  }, [employees.data]);

  return (
    <div>
      {JSON.stringify(employees)}
    </div>
  );
};

export { Todos };
