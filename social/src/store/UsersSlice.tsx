import { createSlice } from "@reduxjs/toolkit";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    adress: {
        street: string,
        suite: string,
        city: string,
        zipcode: number,
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: number,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};

type Users = {
    users: Array<User> 
};

const initialState: Users = {
    users: []
}


const Usersslice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export default Usersslice.reducer;