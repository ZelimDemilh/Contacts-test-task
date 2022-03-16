import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async function (contactID, { rejectWithValue }) {
    try {
      const res = await fetch(`http://localhost:4000/contacts/${contactID}`, {
        method: "DELETE",
      });

      const data = await res.json();

      return contactID;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddNewContact = createAsyncThunk(
  "contacts/add",
  async function (contactDate, { rejectWithValue }) {
    try {

      const res = await fetch("http://localhost:4000/contacts", {
        method: "POST",
        body: JSON.stringify(contactDate),
        headers: {
          "Content-type": "application/json",
        },
      });

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

export const contactsUpdate = createAsyncThunk(
  "contacts/update",
  async function (_, { rejectWithValue }) {
    try {
      // при нормальном сервере обычно выдаются только те контакты которые находятся только у одного пользователя
      // в этом случая я решил обойтись просто общими контактами

      const res = await fetch(`http://localhost:4000/contacts`);

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

    [AddNewContact.pending]: (state) => {
      state.pending = true;
      state.error = null;
    },
    [AddNewContact.fulfilled]: (state, action) => {
      state.pending = false;
      state.contacts.push(action.payload);
    },
    [AddNewContact.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },


    [deleteContact.pending]: (state) => {
      state.pending = true;
      state.error = null;
    },
    //Так как ответа от сервера нормального нет, думаю будет лишним пытаться отловить rejected
    [deleteContact.fulfilled]: (state, action) => {
      state.pending = false;
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
  },
});

// export const {} = contactsSlice.actions;

export default contactsSlice.reducer;
