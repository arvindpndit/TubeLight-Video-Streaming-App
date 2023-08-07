import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.toggle = !state.toggle;
    },
    closeSidebar: (state) => {
      state.toggle = false;
    },
  },
});

export default sidebarSlice.reducer;
export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;
