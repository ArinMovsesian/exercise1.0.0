import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./items-slice";

const store = configureStore({
  reducer: { items: itemsSlice.reducer },
});
export default store;
