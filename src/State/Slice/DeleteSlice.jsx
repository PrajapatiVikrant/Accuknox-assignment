import { createSlice } from "@reduxjs/toolkit";


const DeleteSlice = createSlice({
    name:"DeleteSlice",
    initialState:[
        {
            category:"CSPM",
            widget:[]  
        },
        {
            category:"CWPP",
            widget:[]  
        },
        {
            category:"Image",
            widget:[]  
        },
        {
            category:"Ticket",
            widget:[]  
        },
    ],
    reducers:{
        updateDelete(state,action){
           
           state = action.payload;
           console.log(state)
           return state;
        }
    }
})

export const { updateDelete }    =    DeleteSlice.actions; 
export default DeleteSlice.reducer