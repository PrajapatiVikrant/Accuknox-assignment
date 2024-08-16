import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDashboardWidget } from "../../State/Slice/DashboardSlice";
import { displayWidget } from "../../State/Slice/DisplaySlice";
function WidgetCard({name,text,id,category}){
    const alldata = useSelector((state) => {
        return state.DashboardSlice
    })
    const dispatch = useDispatch();
    function deleteOne(){
        const updatearr = alldata.map((item) => ({
            ...item,
            widget: [...item.widget]
        }));
        for (let i = 0; i < updatearr.length; i++) {
            console.log(updatearr[i].category,'==',category)
            if(updatearr[i].category == category){
                
                updatearr[i].widget = updatearr[i].widget.filter((elem) => {
                      console.log(elem.id,' == ',id)  
                    return elem.id != id;
               })
              
               console.log(updatearr[i].widget)
               break;
            }  
        } 
        const stringify = JSON.stringify(updatearr);
      localStorage.setItem('data', stringify);
      console.log(localStorage.getItem('data'))
      dispatch(displayWidget(updatearr))
      dispatch(updateDashboardWidget(updatearr))
      
    }
    return (
        <div style={{margin:"10px",display:"inline-block",padding:"10px", backgroundColor: "white", height: "230px" , borderRadius: "15px" }}>
           <h3 style={{display:"flex",justifyContent:"space-between"}}><div>{name}</div><i class="fa-solid fa-trash" style={{cursor:"pointer"}} onClick={deleteOne}></i></h3>
           <p style={{padding:"10px"}}>{text}</p>
        </div>
    )
}
export default WidgetCard;