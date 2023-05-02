import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
