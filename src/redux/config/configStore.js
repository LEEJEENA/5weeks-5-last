

import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";
import comment from "../modules/commentSlice"

const store = configureStore({
  reducer: { comment: comment, todos: todos },
});

export default store;