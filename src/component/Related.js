import React from "react";
export default function Related({key2,title,price,img}){
return(
<>
<div className=" col text-center"  key={key2}>
    <div>
    <img className=" text-center border border-gray" style={{width:"70px",height:"70px",borderRadius:"10px"}} src={img} alt="Card image cap"/>
    </div> 
    <p className="text-muted" style={{marginBottom:"0px"}}>{title}</p>
    <p className="text-muted" style={{marginBottom:"0px"}}> {price}$</p>

</div>
</>);
}