import { configureStore } from "@reduxjs/toolkit"; 
import usersReducer  from "./store/users"
import coursesReducer  from "./store/courses"
import ArticlesReducer  from "./store/Articles"


const store =configureStore({
    reducer:{
       users: usersReducer,
       courses: coursesReducer,
       articles: ArticlesReducer,
    }
})
export default store