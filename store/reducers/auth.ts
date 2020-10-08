import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import storage from "constants/storage";
import { DynamicObject } from "interfaces/DynamicObject";
import Router from "next/router";

export const verifyAuth = createAsyncThunk(
  "auth/verifyAuth",
  async (token: string, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/login/verify", {
        token,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (params: DynamicObject, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/login", {
        ...params,
      });

      if (data?.data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    verified: false,
    error: null,
    user: {
      loading: false,
      data: {},
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [verifyAuth.pending as any]: (state) => {
      state.loading = true;
    },
    [verifyAuth.fulfilled as any]: (state: any, action) => {
      state.verified = action.payload.verified;
      state.loading = false;
    },
    [verifyAuth.rejected as any]: (state: any, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    [loginUser.pending as any]: (state) => {
      state.user.loading = true;
    },
    [loginUser.fulfilled as any]: (state: any, action) => {
      state.user.data = action.payload.data;
      state.user.loading = false;
      state.verified = true;
      alert("Successfully authenticated");
      localStorage.setItem(storage.TOKEN, action.payload.token);
      Router.push("/newsfeed");
    },
    [loginUser.rejected as any]: (state: any, action) => {
      alert(action.payload.message);
      state.user.error = action.payload.error;
      state.user.loading = false;
    },
  },
});

export const selectAuth = createSelector(
  (state: any) => ({
    verified: state.auth.verified,
    loading: state.auth.loading,
    error: state.auth.error,
  }),
  (state) => state
);

export const selectUser = createSelector(
  (state: any) => ({
    data: state.auth.user.verified,
    loading: state.auth.user.loading,
    error: state.auth.user.error,
  }),
  (state) => state
);

export default authSlice.reducer;
