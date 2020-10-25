import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import client from "utils/apolloClient";
import coercedGet from "utils/coercedGet";
import { ADD_FRIEND } from "mutations/addFriend";
import { FRIENDS } from "queries/friends";
import getUniqueValues from "utils/getUniqueValues";

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
  async (
    {
      followerId,
      followingId,
    }: {
      followerId: string;
      followingId: string;
    },
    thunkAPI
  ) => {
    try {
      await client.mutate({
        mutation: ADD_FRIEND,
        variables: {
          followerId,
          followingId,
        },
      });

      return {
        id: followingId,
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
    addLoading: {},
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
    [addFriend.pending as any]: (state, action) => {
      state.addLoading = {
        ...state.addLoading,
        [action.meta.arg.followingId]: true,
      };
    },
    [addFriend.fulfilled as any]: (state: any, action) => {
      state.data = getUniqueValues([...state.data, action.payload.id]);
      delete state.addLoading[action.meta.arg.followingId];
    },
    [addFriend.rejected as any]: (state: any, action) => {
      delete state.addLoading[action.meta.arg.followingId];
      toastr.error("Follow Request Failed");
    },
  },
});

export const selectFriends = createSelector(
  (state: any) => ({
    data: state.friends.data,
    loading: state.friends.loading,
    error: state.friends.error,
    addLoading: state.friends.addLoading,
  }),
  (state) => state
);

export default friendsSlice.reducer;
