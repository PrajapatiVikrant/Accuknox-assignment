import React, { useState } from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

function CategoryList() {
   
   
    const listdata = useSelector((state) => {
        return state.SidebarDisplaySlice
    })
  
   
   
    return (
        <>
            {listdata.widget.map((elem) => {
                return <CategoryItem id={elem.id} name={elem.name} text={elem.text} category={listdata.category}/>
            })}
        </>
    )

}
export default CategoryList;