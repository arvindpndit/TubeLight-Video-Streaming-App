import sidebarSlice from "./sidebarSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export default store;
