import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

export default configureStore({
  reducer: {
    favorites: favoriteSlice,
  },
});
