import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDelete } from "../State/Slice/DeleteSlice";
import { displayWidget } from "../State/Slice/DisplaySlice";
import { displaySidebar } from "../State/Slice/SidebarDisplaySlice";
import "./Navbar.css"

function Navbar() {
    const [search, setsearch] = useState('')
    const alldata = useSelector((state) => {
        return state.DashboardSlice;
    })


    const dispatch = useDispatch();

    function SearchWidget(value) {
        console.log(value)
        setsearch(value);

        const updatearr = alldata.map((elem) => ({
            ...elem,
            widget: [...elem.widget]
        }))

        if (value.trim()) {
            console.log('search')
            for (let i = 0; i < updatearr.length; i++) {
                for (let j = 0; j < updatearr[i].widget.length; j++) {
                    console.log(updatearr[i].widget[j].name, '==', value.trim())
                    if (updatearr[i].widget[j].name.toLowerCase() == value.trim().toLowerCase()) {
                        dispatch(displayWidget([
                            {
                                category: updatearr[i].category,
                                widget: [
                                    {
                                        name: updatearr[i].widget[j].name,
                                        text: updatearr[i].widget[j].text

                                    }
                                ]
                            }
                        ]))
                        break;
                    }

                }

            }

        } else {
           
            dispatch(displayWidget(alldata))
        }


    }



    function open() {
        document.getElementById('transparent').style.width = "100%"

        document.getElementById('sidebar').style.width = "40%"
        document.getElementById('sidebarContent').style.width = "100%"
        document.getElementById('firstSideNav').click()

        const categorydata = alldata.filter((elem, ind) => {
            return elem.category === "CSPM";
        })
        console.log(categorydata)
        dispatch(displaySidebar(categorydata[0]))
        dispatch(updateDelete(alldata))
    }



    //small Size
    function openSmall() {
        document.getElementById('transparent').style.width = "100%"
        document.getElementById('sidebar').style.width = "70%"
        document.getElementById('sidebarContent').style.width = "100%"
        document.getElementById('firstSideNav').click()

        const categorydata = alldata.filter((elem, ind) => {
            return elem.category === "CSPM";
        })
        console.log(categorydata)
        dispatch(displaySidebar(categorydata[0]))
        dispatch(updateDelete(alldata))
    }





    return (
        <>
            <nav className="navbarctn">
                <section className="section-1" >
                    <div className="logo" style={{ fontSize: "20px", fontWeight: "bold" }}>CNAPP Dashoard</div>
                </section>
                <section className="section-2" >
                    <div className="search" style={{ display: "flex", alignItems: "center", border: "1px solid rgb(123, 123, 238)", borderRadius: "5px", padding: "5px 14px", width: "60%", backgroundColor: "white" }}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input style={{ fontSize: "16px", paddingLeft: "5px", border: "none", outline: "none", width: "100%" }} type="text" placeholder="Search any widget by name here..." value={search} onChange={(e) => SearchWidget(e.target.value)} className="searchInput" />
                    </div>
                    <button className="addwidget" onClick={open}>Add Widget <i class="fa-solid fa-plus" style={{ paddingLeft: "10px" }}></i></button>
                </section>
            </nav>

            {/* for small size */}
            <nav className="navbarctnSmall">
                <section className="section-1" >
                    <div className="logo" style={{ fontSize: "20px", fontWeight: "bold" }}>CNAPP Dashoard</div>
                </section>
                <section className="section-2" >
                    <div className="search" style={{ display: "flex", alignItems: "center", border: "1px solid rgb(123, 123, 238)", borderRadius: "5px", padding: "5px 14px", width: "60%", backgroundColor: "white" }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input style={{ fontSize: "16px", paddingLeft: "5px", border: "none", outline: "none", width: "100%" }} type="text" placeholder="Search any widget by name here..." value={search} onChange={(e) => SearchWidget(e.target.value)} className="searchInput" />
                    </div>
                    <button className="addwidget" onClick={openSmall}>Add Widget <i className="fa-solid fa-plus" style={{ paddingLeft: "10px" }}></i></button>
                </section>
            </nav>
        </>
    )
}

export default Navbar;