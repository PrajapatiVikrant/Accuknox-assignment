import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displaySidebar } from "../../State/Slice/SidebarDisplaySlice";
import "./SidebarNav.css"

function SidebarNav() {
    const [item1, setitem1] = useState(true);
    const [item2, setitem2] = useState(false);
    const [item3, setitem3] = useState(false);
    const [item4, setitem4] = useState(false);
    const alldata = useSelector((state)=>{
        return state.DashboardSlice;
    })
    const dispatch = useDispatch();
   useEffect(()=>{
          category("CSPM")
   },[])

   function selectcategory(item){
    const categorydata = alldata.filter((elem,ind)=>{
        return elem.category === item;p
    })
   
    dispatch(displaySidebar(categorydata[0]))
   }
   
    function category(item) {
        switch (item) {
            case "CSPM":
                setitem1(true)
                setitem2(false)
                setitem3(false)
                setitem4(false)
                selectcategory("CSPM")
                break;
            case "CWPP":
                setitem1(false)
                setitem2(true)
                setitem3(false)
                setitem4(false)
                selectcategory("CWPP")
                break;
            case "Image":
                setitem1(false)
                setitem2(false)
                setitem3(true)
                setitem4(false)
                selectcategory("Image")
                break;
            case "Ticket":
                setitem1(false)
                setitem2(false)
                setitem3(false)
                setitem4(true)
                selectcategory("Ticket")
                break;

            default:
                break;
        }
    }

    return (
        <nav className="sideNav">
            <div className="sideNav-item" id="firstSideNav" onClick={() => category("CSPM")} style={{ borderBottom: item1 ? "2px solid blue" : "0.1px solid rgb(198, 195, 201)" }} >CSPM</div>
            <div className="sideNav-item" onClick={() => category("CWPP")} style={{ borderBottom: item2 ? "2px solid blue" : "0.1px solid rgb(198, 195, 201)" }}>CWPP </div>
            <div className="sideNav-item" onClick={() => category("Image")} style={{ borderBottom: item3 ? "2px solid blue" : "0.1px solid rgb(198, 195, 201)" }}>Image </div>
            <div className="sideNav-item" onClick={() => category("Ticket")} style={{ borderBottom: item4 ? "2px solid blue" : "0.1px solid rgb(198, 195, 201)" }}>Ticket</div>
        </nav>
    )
}
export default SidebarNav