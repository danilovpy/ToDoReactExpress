import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { catApi } from "../../services/CatService";
import { toDoApi } from "../../services/ToDoService";
import { decrement, increment, selectCount } from "./counterSlice";
import { NewToDo } from "../todo/types";
import { Link } from "react-router-dom";

export function Home() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = toDoApi.useGetTodosQuery();
  const [newTodo] = toDoApi.useNewTodoMutation();
  let [newTodoLocal, setNewTodo] = useState<NewToDo>({
    description: "default",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ description: event.target.value });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newTodo(newTodoLocal);
    const value: HTMLFormElement = event.target as HTMLFormElement;
    value.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
      {data && <p>Latest todo: {data[data.length - 1].description}</p>}
      <Link to="/todo">View All ToDos</Link>
    </div>
  );
}
