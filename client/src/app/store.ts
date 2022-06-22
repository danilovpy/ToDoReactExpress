import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "../features/home/counterSlice";
import { catApi } from "../services/CatService";
import { toDoApi } from "../services/ToDoService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [catApi.reducerPath]: catApi.reducer,
    [toDoApi.reducerPath]: toDoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware).concat(toDoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
