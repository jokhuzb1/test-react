import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: { username: "Admin", password: 12345 },
    },

    reducers: {

        toggleAuthTrue(state) {
            localStorage.setItem("isLoggedIn", true)
        },
        toggleAuthFalse(state) {
            localStorage.setItem("isLoggedIn", false)
        },


    }
})

export const { toggleAuthTrue, toggleAuthFalse } = userSlice.actions;
export default userSlice.reducer;