import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDashboardWidget } from "../State/Slice/DashboardSlice";
import { updateDelete } from "../State/Slice/DeleteSlice";
import { displayWidget } from "../State/Slice/DisplaySlice";
import { displaySidebar } from "../State/Slice/SidebarDisplaySlice";
import CategoryList from "./SubComponent/CategoryList";
import SidebarNav from "./SubComponent/SidebarNav";
import "./Sidebar.css";
function Sidebar() {
   const alldata = useSelector((state) => {
      return state.DashboardSlice
   })
   const adddata = useSelector((state) => {
      return state.DeleteSlice
   })
   const dispatch = useDispatch();
   function close() {
      document.getElementById('transparent').style.width = "0"
      document.getElementById('sidebar').style.width = "0"
      document.getElementById('sidebarContent').style.width = "0"
   }

   function add() {
      dispatch(updateDashboardWidget(adddata))
      dispatch(displayWidget(adddata))
      console.log(adddata)

     
      const stringify = JSON.stringify(adddata);

     
      localStorage.setItem('data', stringify);
      location.reload();

   }

   function cancel() {
      console.log(alldata)
      dispatch(updateDelete(alldata))
      dispatch(displayWidget(alldata))
      const stringify = JSON.stringify(alldata);

     
      localStorage.setItem('data', stringify);
      location.reload();


   }

   return (
      <div id="transparent" >
         <div id="sidebar" >
            <div id="sidebarContent" style={{ width: "0", overflow: "hidden" }}>
               <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 14px", backgroundColor: "blue", color: "white" }}>
                  <div>Add Widget</div>
                  <div style={{ fontSize: "25px", cursor: "pointer" }} onClick={close}>&#215;</div>
               </nav>
               <p style={{ padding: "5px" }}>
                  Personalise your dashboard by adding the following widget
               </p>
               <SidebarNav />
               <CategoryList />





            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
               <div>
                  <button style={{ fontSize: "18px", padding: "6px 16px", border: "1px solid blue", backgroundColor: "white", borderRadius: "5px", margin: "5px", cursor: "pointer" }} onClick={cancel}>Cancel</button>
                  <button style={{ fontSize: "18px", padding: "6px 16px", border: "1px solid blue", backgroundColor: "black", color: "white", borderRadius: "5px", margin: "5px", cursor: "pointer" }} onClick={add}>Confirm</button>
               </div>
            </div>

         </div>
      </div>




   )
}
export default Sidebar;