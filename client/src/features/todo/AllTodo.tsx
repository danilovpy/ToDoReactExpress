import React from "react";
import { useGetTodosQuery } from "../../services/ToDoService";
import ToDo from "./types";

export const AllTodo = (props: {}) => {
  const { data, isLoading } = useGetTodosQuery();

  return (
    <div>
      {data &&
        data.map((x: ToDo) => (
          <p>
            id: {x.id} | Description: {x.description}
          </p>
        ))}
    </div>
  );
};
