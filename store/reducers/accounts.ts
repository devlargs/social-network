import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import client from "utils/apolloClient";
import coercedGet from "utils/coercedGet";
import { ACCOUNTS } from "queries/accounts";

type AccountsProps = {
  first?: number;
  userId?: Array<string>;
  after: string | null;
};

export const getAccounts = createAsyncThunk(
  "accounts/getAccounts",
  async ({ first, after, userId }: AccountsProps, thunkAPI) => {
    try {
      const { data } = await client.query({
        query: ACCOUNTS,
        variables: {
          first,
          after,
          userId,
        },
      });

      return {
        data: coercedGet(data, "accounts", []),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAccounts.pending as any]: (state) => {
      state.loading = true;
    },
    [getAccounts.fulfilled as any]: (state: any, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [getAccounts.rejected as any]: (state: any, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const selectAccounts = createSelector(
  (state: any) => ({
    data: state.accounts.data,
    loading: state.accounts.loading,
    error: state.accounts.error,
  }),
  (state) => state
);

export default accountSlice.reducer;
