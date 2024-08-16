import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayWidget } from "../State/Slice/DisplaySlice";
import AddWidgetCard from "./SubComponent/AddWidgetCard";
import WidgetCard from "./SubComponent/WidgetCard";
import "./Main.css"

function Main() {
    const DashboardData = useSelector((state) => {
        return state.DashboardSlice
    })
    const displaydata = useSelector((state) => {
        return state.DisplaySlice;
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(displayWidget(DashboardData))
    },[])

    return (
        <main style={{ padding: "30px" }}>
            {displaydata.map((elem, index) => {
                return (
                    <div className="category">
                        <div className="categoryName" style={{ margin: "5px", fontSize: "18px", fontWeight: "700" }} >{elem.category} Dashboard</div>
                        <div className="widgetctn" >
                            {elem.widget.map((widget)=>{
                                return <WidgetCard id={widget.id} category={elem.category} name={widget.name} text={widget.text}/>
                            })}
                            
                            <AddWidgetCard category = {elem.category} />
                        </div>
                        <br />
                    </div>
                )
            })}

        </main>
    )

}
export default Main;