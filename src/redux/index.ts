import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reduxLogger from 'redux-logger';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import {userSlice} from "./reducers/user";


const store = configureStore({
  reducer: {
      user: userSlice.reducer
  },
  middleware: [reduxLogger, reduxThunk as ThunkMiddleware]
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
