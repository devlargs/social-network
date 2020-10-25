import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import storage from "constants/storage";
import { sign } from "server/helpers/token";
import { DynamicObject } from "interfaces/DynamicObject";
import Router from "next/router";
import client from "utils/apolloClient";
import toastr from "toastr";
import clientCookie from "js-cookie";
import { CREATE_ACCOUNT } from "mutations/account";

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (params: DynamicObject, thunkAPI) => {
    try {
      const {
        data: {
          createAccount: { id },
        },
      } = await client.mutate({
        mutation: CREATE_ACCOUNT,
        variables: {
          data: params,
        },
      });

      // await client.mutate({
      //   mutation: PUBLISH_ACCOUNT,
      //   variables: {
      //     id,
      //   },
      // });

      return { id };
    } catch (ex) {
      return thunkAPI.rejectWithValue({
        error: "Something went wrong",
      });
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
    currentUser: null,
    user: {
      loading: false,
      data: {},
      error: null,
    },
  },
  reducers: {
    resetUser: (state) => {
      state.currentUser = null;
      state.user = {
        loading: false,
        data: {},
        error: null,
      };
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      if (window.location.pathname === "/") {
        Router.push("/newsfeed");
      }
    },
  },
  extraReducers: {
    [loginUser.pending as any]: (state) => {
      state.user.loading = true;
    },
    [loginUser.fulfilled as any]: (state: any, action) => {
      state.user.data = action.payload.data;
      state.currentUser = action.payload.data.id;
      state.user.loading = false;
      state.verified = true;
      toastr.success("Successfully authenticated");
      clientCookie.set("token", action.payload.token);
      localStorage.setItem(storage.TOKEN, action.payload.token);
      Router.push("/newsfeed");
    },
    [loginUser.rejected as any]: (state: any, action) => {
      toastr.error(action.payload.message);
      state.user.error = action.payload.error;
      state.user.loading = false;
    },
    [createUser.pending as any]: (state) => {
      state.user.loading = true;
    },
    [createUser.fulfilled as any]: (state: any, action) => {
      toastr.success("User successfully created");
      const token = sign({ id: action.payload.id });
      clientCookie.set("token", token);
      localStorage.setItem(storage.TOKEN, token);
      Router.push("/newsfeed");
      state.user.loading = false;
    },
    [createUser.rejected as any]: (state: any, action) => {
      toastr.error(action.payload.error);
      state.user.error = action.payload.error;
      state.user.loading = false;
    },
  },
});

export const selectUser = createSelector(
  (state: any) => ({
    data: state.auth.user.verified,
    loading: state.auth.user.loading,
    error: state.auth.user.error,
  }),
  (state) => state
);

export const selectCurrentUser = createSelector(
  (state: any) => ({
    userId: state.auth.currentUser,
  }),
  (state) => state
);

export const { setCurrentUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
