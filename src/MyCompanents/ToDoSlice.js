import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const reduxToDo = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ value: action.payload, id: uuidv4(), done: false });
    },
    done: (state, action) => {
      let index = state.items.findIndex((el) => el.id === action.payload);
      state.items[index].done = !state.items[index].done;
    },
    remove: (state, action) => {
      let index = state.items.findIndex((el) => el.id === action.payload);
      state.items.splice(index, 1);
    },
    removeAll: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, done, remove, removeAll } = reduxToDo.actions;

export const store = configureStore({
  reducer: {
    todo: reduxToDo.reducer,
  },
});
