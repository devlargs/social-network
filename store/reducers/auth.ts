import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    verified: false,
    error: null,
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

export default authSlice.reducer;
