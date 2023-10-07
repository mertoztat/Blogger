import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4000/api";

interface IProps {
  username: string;
  email: string;
  password: string;
  success: string;
}

export const registerUser = createAsyncThunk<
  IProps,
  { username: string; email: string; password: string }
>(
  "/auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        },
      };
      const { data } = await axios.post(
        `${URL}/auth/register`,
        { username, email, password },
        config
      );
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk<
  IProps,
  { username: string; password: string }
>("/auth/login", async ({ username, password }, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${URL}/auth/login`,
      { username: username, password: password },
      config
    );
    console.log("redux data login", data);
    // store user's token in local storage
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

// initialize userToken from local storage
const userInfo = localStorage.getItem("user")
  ? localStorage.getItem("user")
  : null;

const initialState = {
  loading: false,
  userInfo: userInfo,
  error: false,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        // state.userInfo = payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        // state.userInfo = payload
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default authSlice.reducer;
