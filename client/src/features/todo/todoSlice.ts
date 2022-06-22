import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import ToDo from "./types";

interface TodoState {
  value: ToDo[];
}

const initialState: TodoState = {
  value: [],
};
