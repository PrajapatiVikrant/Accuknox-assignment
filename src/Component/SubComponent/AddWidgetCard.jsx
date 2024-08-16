import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDashboardWidget } from "../../State/Slice/DashboardSlice";
import { displayWidget } from "../../State/Slice/DisplaySlice";

function AddWidgetCard({category}) {
    const [addbutton, setaddbutton] = useState(false);
    const [name,setname] = useState('');
    const [text,settext] = useState('');
    const dispatch = useDispatch();
    const alldata = useSelector((state)=>{
        return state.DashboardSlice
    });
    const displaydata = useSelector((state)=>{
        return state.DisplaySlice
    })
    function addwidget(){
        if(name){
            const updateddata = alldata.map((elem) => {
                if (elem.category === category) {
                    return {
                        ...elem,
                        widget: [...elem.widget, { id:elem.widget.length,name: name, text: text }]
                    };
                }
                return elem;
            });
            
            dispatch(updateDashboardWidget(updateddata))
            dispatch(displayWidget(updateddata))
           
            setaddbutton(false);
        }else{
            alert("Name is required")
        }
      
    }

    return (
        <div style={{margin:"10px", backgroundColor: "white", height: "250px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "15px" }}>
            {addbutton?(
                <div style={{display:"flex",flexDirection:"column"}}>
                    <center>
                <input onChange={(e)=>setname(e.target.value)} style={{width:"200px",padding:"5px",fontSize:"17px"}} type="text" placeholder="Enter widget name..." />
                <br />
                <br />
                <textarea onChange={(e)=>settext(e.target.value)} style={{width:"200px",padding:"5px",fontSize:"16px"}} placeholder="Enter text here..."  rows="4"></textarea><br />
                <br />
                <div style={{padding:"5px",color:"white",backgroundColor:"black",cursor:"pointer",borderRadius:"5px",fontSize:"16px"}} onClick={addwidget}>Add widget</div>
                </center>
            </div>
            ):(
            <button onClick={() => setaddbutton(true)} className="addwidget" style={{ fontSize: "16px", padding: "8px 14px", cursor: "pointer", backgroundColor: "white", border: "1px solid rgb(123, 123, 238)", borderRadius: "5px", height: "fit-content" }}><i class="fa-solid fa-plus" style={{ paddingRight: "10px" }}></i> Add Widget </button>
        )}
            
          
        </div>
    )




}
export default AddWidgetCard;