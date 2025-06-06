// src/store/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const PAGE_SIZE = 10;

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (page = 1) => {
    const res = await fetch(
      `http://localhost:1337/api/posts?pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}&populate=*`
    );
    const data = await res.json();
    return {
      posts: data.data,
      pagination: data.meta.pagination,
    };
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    pagination: { page: 1, pageSize: PAGE_SIZE, pageCount: 1, total: 0 },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.posts;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
