import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: { username: "Admin", password: 12345, isLogged: false },
    },
    reducers: {
        toggleAuth: (state) => {
            state.user.isLogged = !state.user.isLogged
        },
    }
})

export const { toggleAuthTrue, toggleAuthFalse, toggleAuth } = userSlice.actions;
export default userSlice.reducer;