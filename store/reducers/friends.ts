import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import client from "utils/apolloClient";
import coercedGet from "utils/coercedGet";
import { ADD_FRIEND } from "mutations/addFriend";
import { FRIENDS } from "queries/friends";

export const getFriends = createAsyncThunk(
  "friends/getFriends",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await client.query({
        query: FRIENDS,
        variables: {
          id,
        },
      });

      return {
        data: coercedGet(data.account, "friends", []).map(
          (q: { id: string }) => q.id
        ),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addFriend = createAsyncThunk(
  "friends/addFriend",
  async (userId: string, thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: ADD_FRIEND,
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
