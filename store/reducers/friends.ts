import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import client from "utils/apolloClient";
import coercedGet from "utils/coercedGet";
import { FRIENDS } from "queries/friends";

export const getFriends = createAsyncThunk(
  "friends/getFriends",
  async (userId: string, thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: FRIENDS,
        variables: {
          id: userId,
        },
      });

      return {
        data: coercedGet(data.accounts[0], "friends", []).map(
          (q: { id: string }) => q.id
        ),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getFriends.pending as any]: (state) => {
      state.loading = true;
    },
    [getFriends.fulfilled as any]: (state: any, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [getFriends.rejected as any]: (state: any, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const selectFriends = createSelector(
  (state: any) => ({
    data: state.friends.data,
    loading: state.friends.loading,
    error: state.friends.error,
  }),
  (state) => state
);

export default friendsSlice.reducer;
