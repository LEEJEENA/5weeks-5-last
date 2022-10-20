import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// initial State
const initialState = {
    todos: [
      {
        id: 1,
        title: "오늘의 할일",
        name: "rtan",
        content: "끝내주게 놀기",
      }
    ]
  }


  export const __getTodo = createAsyncThunk(
    "todos/__getTodo",
    async (payload, thunkAPI) => {
      
    try {
    const data = await axios.get("http://localhost:3001/todos");
    return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
    }
    );

    export const __createTodo = createAsyncThunk(
      "todos/__createTodo",
      async (payload, thunkAPI) => {
      try {
      const data = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
      }
      );

      export const __deleteTodo = createAsyncThunk(
        "todos/__deleteTodo",
        async (payload, thunkAPI) => {
          
          try {
            await axios.delete(`http://localhost:3001/todos/${payload}`);
            return thunkAPI.fulfillWithValue(payload);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
        }
      );

      export const __editTodo2 = createAsyncThunk(
        "todos/__editTodo2",
        async (payload, thunkAPI) => {
          try {
            await axios.patch(`http://localhost:3001/todos/${payload.id}`, {id:payload.id,content:payload.target});
            const data = await axios.get("http://localhost:3001/todos");
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
        }
      );
    
const todosSlice = createSlice({
  name: "todos",
  initialState,
    extraReducers: {
      [__getTodo.pending]: (state) => {
        state.isLoading = true; 
      },
      [__getTodo.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝나서 false
        state.todos = action.payload; 
      },
      [__getTodo.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      },

      [__createTodo.pending]: (state) => {
        state.isLoading = true;
      },
      [__createTodo.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝나서 false
        state.todos.push(action.payload); 
      },
      [__createTodo.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      },

      [__deleteTodo.pending]: (state) => {
        state.isLoading = true; 
      },
      [__deleteTodo.fulfilled]: (state, action) => {
        state.isLoading = false;  // 네트워크 요청이 끝나서 falses
         state.todos = state.todos.filter((todo) => todo.id !==  action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      
      [__deleteTodo.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
      [__editTodo2.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__editTodo2.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝나서 false
        state.todos = action.payload; 
      },
      [__editTodo2.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },


    }})

export const {} = todosSlice.actions;
export default todosSlice.reducer;

  /*
   const Index = state.todos.findIndex((todo)=>todo.id ===Number(action.payload.id))
        const test = {...state.todos[Index], content : action.payload.target}
        const newTodos = state.todos.map((todo)=> todo.id === Number(action.payload.id)? (state.todos[Index] = test):(todo))

        
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        createTodo : (state, action) => {
            state.todos =[...state.todos, action.payload]
        },

        deleteTodo : (state, action) => {
            state.todos =[...state.todos.filter(todo => {
              return todo.id !== action.payload
            })]
        },
        editTodo2 : (state, action) => 
        {
          const Index = state.todos.findIndex((todo)=>todo.id ===Number(action.payload.id))
          const test = {...state.todos[Index], content : action.payload.target}
          const newTodos = state.todos.map((todo)=> todo.id === Number(action.payload.id)? (state.todos[Index] = test):(todo))

            state.todos =[...newTodos]
        }
    }
})
export const { createTodo, deleteTodo, editTodo2} = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;*/