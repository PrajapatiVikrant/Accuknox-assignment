import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDelete } from "../../State/Slice/DeleteSlice";

function CategoryItem({ id, name,text, category }) {
    const [check, setcheck] = useState(true);
    const dispatch = useDispatch();
    const alldata = useSelector((state) => {
        return state.DeleteSlice
    })
   
    function handleClick() {
        const updatearr = alldata.map((item) => ({
            ...item,
            widget: [...item.widget]
        }));
        if (check) {
            for (let i = 0; i < updatearr.length; i++) {
                console.log(updatearr[i].widget)
                updatearr[i].widget = updatearr[i].widget.filter((elem) => {
                   
                    console.log(id)
                     return elem.id != id || updatearr[i].category != category;
                })
                console.log(updatearr[i].widget)
            }
        }else{

            for(let i = 0;i<updatearr.length;i++){
                if(updatearr[i].category = category){
                    
                    if(id == updatearr[i].widget.length){
                        console.log('hello')
                        updatearr[i].widget[id] = {
                            id:id,
                            name:name,
                            text:text
                        }
                    }else{

                        for(let j = updatearr[i].widget.length;j>id;j--){
                            updatearr[i].widget[j] = updatearr[i].widget[j-1]
                        }
                        updatearr[i].widget[id] = {
                            id:id,
                            name:name,
                            text:text
                        }
                    }
                }
                break;
            }
           
        }
        dispatch(updateDelete(updatearr))
        check ? setcheck(false) : setcheck(true)
    }

    return (
        <div style={{ display: "flex", alignItems: "center", margin: "9px", boxShadow: "0 0 1px black" }}>
            <input style={{ width: "20px", height: "20px", margin: "4px" }}  onClick={handleClick} checked={check} type="checkbox" />
            <div>{name}</div>
        </div>
    )
}
export default CategoryItem;