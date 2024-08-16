import { createSlice } from "@reduxjs/toolkit";


const DisplaydSlice = createSlice({
    name:"DisplaySlice",
    initialState:[],
    reducers:{
        displayWidget(state,action){
           
           state = action.payload;
           return state;
        }
    }
})

export const { displayWidget }    =    DisplaydSlice.actions; 
export default DisplaydSlice.reducer