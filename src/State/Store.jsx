import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./Slice/DashboardSlice";
import DisplaySlice from "./Slice/DisplaySlice";
import SidebarDisplaySlice from "./Slice/SidebarDisplaySlice";
import DeleteSlice from "./Slice/DeleteSlice";


const Store = configureStore({
    reducer:{
        DashboardSlice,
        DisplaySlice,
        SidebarDisplaySlice,
        DeleteSlice

    }
})
export default Store;