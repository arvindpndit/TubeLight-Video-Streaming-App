import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessage: (state, action) => {
      state.messages.splice(80, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addChatMessage } = chatSlice.actions;
