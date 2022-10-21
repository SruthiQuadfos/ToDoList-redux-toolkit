import {createSlice} from "@reduxjs/toolkit";
export const themeSlice=createSlice({
    name:"theme",
    initialState:{
        darkMode:true,
    },
    reduceres:{
        toggleTheme:(state)=>{
            state.darkMode=!state.darkMode;
        }
    }
})
export const {toggleTheme} = themeSlice.actions;

export const selectDarkMode = (state) => state.theme.darkMode;
export default themeSlice.reducer;