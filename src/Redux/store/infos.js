import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
export const getInfosByServer = createAsyncThunk(
    "users/getInfosByServer", 
     async (url)=> {
       return fetch(url)
       .then((res)=>res.json())
       .then(data=>data)
},
)
const slice = createSlice({
    name :"users",
    initialState:[],
    reducers:{},
 
    extraReducers:builder=>{
      builder.addCase(getInfosByServer.fulfilled,(state,action)=>{
        state.push(...action.payload)
      })  
    }
},
)

export default slice.reducer;