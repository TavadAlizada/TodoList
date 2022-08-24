import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      return state;
    },
    remove: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    edit: (state, action) => {
      console.log(action.payload)
      return state.filter((item) => item.id != action.payload);
    },
    id: (state) => {
       state.filter((item) => {
        item.id += 1;
        console.log(Number(item.id));
      });
    },
  },
});
export const { add, remove, edit, id } = todoSlice.actions;
export default todoSlice.reducer;
