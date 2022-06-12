import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type ProfileStatus = {
    currentStatus: string,
    allStatuses: []
}

type ProfileEmails = {
    currentEmail: string,
    allEmails: []
}

type ProfilePhones = {
    currentPhone: string,
    allPhones: []
}

type ProfileWorks = {
    currentWork: string,
    allWorks: []
}

type ProfileCities = {
    currentCity: string,
    allCities: []
}

type ProfileItems = {
    profileItems: {
        statuses: Array<ProfileStatus>,
        emails: Array<ProfileEmails>,
        phones: Array<ProfilePhones>,
        works: Array<ProfileWorks>,
        cities: Array<ProfileCities>
    }
}

const initialState:  ProfileItems = {
    profileItems: {
        statuses: [],
        emails: [],
        phones: [],
        works: [],
        cities: []
    }
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        showMessage () {
            alert('ok')
        }
    }
})



export default ProfileSlice.reducer;



