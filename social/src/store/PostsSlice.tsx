import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


type Post = {
    userId: number,
    id: number,
    body: string,
    title: string
}

type Posts = {
    posts: Array<Post>,
}

const initialState: Posts = {
    posts: [],
}

export const fetchPosts = createAsyncThunk<Post[], undefined, { rejectValue: string }>(
    'posts/fetchPosts',
    async function (_, { rejectWithValue }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        if (!response.ok) {
            return rejectWithValue('Server Error')
        }
        const data = await response.json();
        return data;
    }
);

export const addNewPost = createAsyncThunk<Post, string, { rejectValue: string }>(
    'posts/addNewPost',
    async function (text, { rejectWithValue }) {
        const post = {
            id: 25,
            userId: 1,
            title: 'title',
            body: text
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        if (!response.ok) {
            return rejectWithValue('Server Error')
        }
        return await (response.json()) as Post;
    }
);

export const RemoveFetchPost = createAsyncThunk<number, number, { rejectValue: string }>(
    'posts/RemoveFetchPost',
    async function (id, { rejectWithValue }) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            return rejectWithValue('server error');
        }
        return id;
    }
);

export const ChangeFetchPost = createAsyncThunk<Post, {id:number, postValue:string}, { rejectValue: string, state: {posts: Posts} }>(
    'posts/ChangeFetchPost',
    async function ({id, postValue}, { rejectWithValue, getState }) {
        const post = getState().posts.posts.find(post => post.id === id);
        if (post) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    
                    body: postValue
                })
            });
            if (!response.ok) {
                rejectWithValue('server error')
            }

            return await response.json() as Post;
            
        }
        return rejectWithValue('no such post in the posts')
    }
);

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
                
            })
            .addCase(RemoveFetchPost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload);
            })
            .addCase(ChangeFetchPost.fulfilled, (state, action) => {
                const post = state.posts.find(post => post.id === action.payload.id);
                if(post){
                    post.body = action.payload.body;
                };
                
            })
    }
})



export default PostsSlice.reducer;