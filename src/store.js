// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/newsfeed"

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;