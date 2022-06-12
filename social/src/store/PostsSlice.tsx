import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = {
    id: string,
    text: string
}

type Posts = {
    posts: Array<Post>
}

const initialState: Posts = {
    posts: []
}


const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost(state, action: PayloadAction<string>) {
            state.posts.push({
                id: new Date().toISOString(),
                text: action.payload
            })
        }
    }
})



export const { createPost } = PostsSlice.actions;

export default PostsSlice.reducer;