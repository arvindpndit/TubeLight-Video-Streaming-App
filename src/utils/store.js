import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice,
  },
});

export default store;
