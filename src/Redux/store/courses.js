import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getCoursessByServer = createAsyncThunk(
  "courses/getCoursessByServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then(data => data)
  },
)
const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getCoursessByServer.fulfilled, (state, action) => action.payload)  
    }
},
)

export default slice.reducer;