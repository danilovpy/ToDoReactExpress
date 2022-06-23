import React, { MouseEventHandler, MouseEvent } from "react";
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
} from "../../services/ToDoService";
import ToDo from "./types";

export const AllTodo = (props: {}) => {
  const { data, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    let element = event.currentTarget as HTMLElement;
    let value = element.getAttribute("data-key") as string;
    const id: number = parseInt(value);
    deleteTodo(id);
  };

  return (
    <div>
      {data &&
        data.map((x: ToDo) => (
          <span key={x.id}>
            <p>
              id: {x.id} | Description: {x.description}
            </p>
            <button onClick={handleDelete} data-key={x.id}>
              Delete Task
            </button>
          </span>
        ))}
    </div>
  );
};
