import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getUsersByServer = createAsyncThunk(
  "users/getUsersByServer",
  async () => {
    return fetch("https://redux-cms.iran.liara.run/api/users")
      .then((res) => res.json())
      .then(data => data)
  },
)
export const removeIteam = createAsyncThunk(
  "users/removeIteam",
  async (id) => {
    console.log(id);
    return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then(data => data)
  },
)
export const addUser = createAsyncThunk(
  "users/addUser",
  async () => {
    fetch("https://redux-cms.iran.liara.run/api/users", {
      method: "POST",
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "firstname": "mojtaba",
        "lastname": "rasoli",
        "username": "moji-rasli",
        "email": "moji@yahoo.com",
        "city": "rasht",
        "age": 22
    })
    }).then(res=>res.json()) .then(data=>data)    

  })
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getUsersByServer.fulfilled, (state, action) => action.payload)
    builder.addCase(removeIteam.fulfilled, (state, action) => {
      const newstate = state.filter((user) => user._id !== action.payload.id)
      return newstate

    })
    builder.addCase(addUser.fulfilled, (state, action) =>{ 
      console.log(action.payload)

      // return state.push(action.payload)
    })
  }
})

export default slice.reducer;