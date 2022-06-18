import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type ItemInfo = {
    id: string,
    text: string
}

type ProfileStatus = {
    currentStatus: string,
    allStatuses: Array<ItemInfo>
}

type ProfileEmails = {
    currentEmail: string,
    allEmails: Array<ItemInfo>
}

type ProfilePhones = {
    currentPhone: string,
    allPhones: Array<ItemInfo>
}

type ProfileWorks = {
    currentWork: string,
    allWorks: Array<ItemInfo>
}

type ProfileCities = {
    currentCity: string,
    allCities: Array<ItemInfo>
}

type ProfileItems = {
    profileItems: {
        statuses: ProfileStatus,
        emails: ProfileEmails,
        phones: ProfilePhones,
        works: ProfileWorks,
        cities: ProfileCities
    }
}

const initialState:  ProfileItems = {
    profileItems: {
        statuses: { currentStatus:'', allStatuses: [] },
        emails: { currentEmail:'', allEmails: [] },
        phones: { currentPhone: '', allPhones: [] },
        works: { currentWork: '', allWorks: [] },
        cities: { currentCity: '', allCities: [] }
    }
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        createNewStatus (state, action: PayloadAction<string>) {
            state.profileItems.statuses.currentStatus = action.payload;
            state.profileItems.statuses.allStatuses.push({id: new Date().toISOString(), text: action.payload });
        },
        createNewEmail (state, action: PayloadAction<string>) {
            state.profileItems.emails.currentEmail = action.payload;
            state.profileItems.emails.allEmails.push({id: new Date().toISOString(), text: action.payload });
        },
        createNewPhone (state, action: PayloadAction<string>) {
            state.profileItems.phones.currentPhone = action.payload;
            state.profileItems.phones.allPhones.push({id: new Date().toISOString(), text: action.payload});
        },
        createNewWork (state, action: PayloadAction<string>) {
            state.profileItems.works.currentWork = action.payload;
            state.profileItems.works.allWorks.push({id: new Date().toISOString(), text: action.payload });
        },
        createNewCity (state, action: PayloadAction<string>) {
            state.profileItems.cities.currentCity = action.payload;
            state.profileItems.cities.allCities.push({id: new Date().toISOString(), text: action.payload })
        }
    }
})

export const { createNewStatus, createNewEmail, createNewPhone, createNewWork, createNewCity } = ProfileSlice.actions;

export default ProfileSlice.reducer;



