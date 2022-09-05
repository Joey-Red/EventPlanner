import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = false;

export const authSlice = createSlice({
  name: "authState",
  initialState: { value: initialStateValue },
  reducers: {
    authUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { authUser } = authSlice.actions;

export default authSlice.reducer;
