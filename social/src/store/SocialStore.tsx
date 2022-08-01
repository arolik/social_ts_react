import {  configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./PostsSlice";
import ProfileSlice from "./ProfileSlice";
import UsersSlice from "./UsersSlice";


const mainStore =  configureStore ({
    reducer: {
        posts: PostsSlice,
        profileItems: ProfileSlice,
        users: UsersSlice
    }
})

export default mainStore;

export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch;