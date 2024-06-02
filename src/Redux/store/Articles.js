import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getArticlesByServer = createAsyncThunk(
  "articles/getArticlesByServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then(data => data)
  },
)
export const removeIteam = createAsyncThunk(
  "articles/removeIteam",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(data => data)
  },
)
export const addArticle = createAsyncThunk(
  "articles/addArticle",
  async () => {
    fetch("https://redux-cms.iran.liara.run/api/articles", {
      method: "POST",
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": "اموزش کار با متد date",
        "category": "فرانت اند",
        "views": 4,
        "desc": "بسیار مفید"
      })
    }).then(res=>res.json()) .then(data=>data)    

  })
const slice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getArticlesByServer.fulfilled, (state, action) => action.payload)
    builder.addCase(removeIteam.fulfilled, (state, action) => {
      const newstate = state.filter((article) => article._id !== action.payload.id)
      return newstate
    })
    builder.addCase(addArticle.fulfilled, (state, action) =>{ console.log(action.payload)
      // return state.push(action.payload)
    })

  }
},)

export default slice.reducer;