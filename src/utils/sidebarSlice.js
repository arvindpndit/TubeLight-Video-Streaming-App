import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export default sidebarSlice.reducer;
export const { toggleSidebar } = sidebarSlice.actions;
