import { createSlice } from "@reduxjs/toolkit";


const SidebarDisplaydSlice = createSlice({
    name:"SidebarDisplaySlice",
    initialState:{
        category:"CSPM",
        widget:[] 
    },
    reducers:{
        displaySidebar(state,action){
            console.log(action.payload)
           state = action.payload;
           return state
        }
    }
})

export const { displaySidebar }    =    SidebarDisplaydSlice.actions; 
export default SidebarDisplaydSlice.reducer