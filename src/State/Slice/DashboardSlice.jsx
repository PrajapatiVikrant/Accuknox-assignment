import { createSlice } from "@reduxjs/toolkit";

// Define the data
const data = [
    {
        category: "CSPM",
        widget: []  
    },
    {
        category: "CWPP",
        widget: []  
    },
    {
        category: "Image",
        widget: []  
    },
    {
        category: "Ticket",
        widget: []  
    },
];



// Retrieve and parse the data from localStorage (optional)
const jsondata = JSON.parse(localStorage.getItem('data'));
console.log(jsondata);




const DashboardSlice = createSlice({
    name:"DashboardSlice",
    initialState:localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):data,
    reducers:{
        updateDashboardWidget(state,action){
            
            state = action.payload;
            return state
        }
    }
})

export const { updateDashboardWidget }    =    DashboardSlice.actions; 
export default DashboardSlice.reducer