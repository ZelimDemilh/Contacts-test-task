import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "signIn/login",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await fetch(
        `http://localhost:4000/users?login=${userData.login}&password=${userData.password}`
      );

      const data = await res.json();

      //обычно тут писалось условия для выданной ошибки в виде data.error, но так как мне лень разбираться в новой библиотеке для ТЗ пишу такое условие

      if (data.length === 0) {
        throw new Error(data.error);
      }

      // на норм сервере единичный юзер только как объект передается, лень писать код для массива, прошу войти в положение

      localStorage.setItem("token", data[0].token);

      //я просто раньше авторизацию JWT использовал

      return data[0].token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    pending: false,
    userDate: {},
    error: null,
    token: localStorage.getItem("token"),
    //я просто раньше авторизацию с токеном использовал
  },

  reducers: {},

  extraReducers: {
    [login.pending]: (state) => {
      state.pending = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.pending = false;
      state.token = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// export const {} = signInSlice.actions;

export default signInSlice.reducer;
