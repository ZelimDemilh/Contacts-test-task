import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {login} from "./signInSlice";

export const contactsUpdate = createAsyncThunk(
    "contacts/update",
    async function (_, { rejectWithValue }) {
      try {
        const res = await fetch(
            `http://localhost:4000/contacts`
        );

        const data = await res.json();

        if (data.length === 0) {
          throw new Error(data.error);
        }

        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    pending: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
      [contactsUpdate.pending]: (state) => {
          state.pending = true;
          state.error = null;
      },
      [contactsUpdate.fulfilled]: (state, action) => {
          state.pending = false;
          state.contacts = action.payload;
      },
      [contactsUpdate.rejected]: (state, action) => {
          state.pending = false;
          state.error = true;
      },
  },
});

export const {} = contactsSlice.actions;

export default contactsSlice.reducer;
