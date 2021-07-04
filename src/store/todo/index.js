import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isEdit: false,
    currentTodo: "",
    currentId: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: Date.now(),
          ...action.payload
        }
      ];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      state.isEdit = true;
      state.currentId = action.payload.id;
      state.currentTodo = action.payload.name;
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === state.currentId
      );
      state.todos[index].name = action.payload.name;
      state.currentTodo = "";
      state.isEdit = false;
      state.currentId = null;
    }
  }
});

export const { addTodo, removeTodo, updateTodo, editTodo } = Slice.actions;

export const getTodos = (state) => state.todo.todos;
export const getCurrentTodo = (state) => state.todo.currentTodo;
export const getIsEdit = (state) => state.todo.isEdit;

export default Slice.reducer;
