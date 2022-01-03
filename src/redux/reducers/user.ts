import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import axios from "axios";

interface UserCredentials {
  email: string, 
  password: string
}

interface UserState {
  user: UserCredentials
}

// const initialState: UserState = {
//   user: {
//     email: "",
//     password: ""
//   }
// }

export const me = createAsyncThunk<UserCredentials, void>(
  "auth/me", 
  async () => {
    const { data } = await axios.get(`/auth/me`);
    return data;
});

export const authenticate = createAsyncThunk
<{user: any, method: string}, void, {rejectValue: string} >
("auth", 
async (user: any, method: any) => {
    await axios.post<{user: any, method: string}>(`/auth/${method}`, user);
    const { data } = await axios.get(`/auth/me`);
    return data;
});

export const update = createAsyncThunk<UserCredentials, void>(
  "update", 
  async (user: any) => {
    const { data } = await axios.put(`/auth/update`, user);
    return data;
});

export const logout = createAsyncThunk<UserCredentials, void>("user/logout", 
  async () => {
    const { data } = await axios.delete(`/auth/logout`);
    return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state: any, action: PayloadAction) => {
      return { user: action.payload };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(authenticate.fulfilled, (state: any, action: PayloadAction) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state: any, action: PayloadAction) => {
        state = { user: {}};
      })
      .addCase(update.fulfilled, (state: any, action: PayloadAction) => {
        state.user = action.payload;
      })
      .addCase(me.fulfilled, (state: any, action: PayloadAction) => {
        state.user = action.payload;
      })
    }
})

export const { setUser } = userSlice.actions


export default userSlice.reducer;