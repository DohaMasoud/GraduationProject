import React from "react";
export default function Liked({key2,title,price,img}){
return(
<>
<div className="row " style={{margin:"10px"}} key={key2}>
        <div className="col ">
                <img
                className="border rounded"
                  style={{width:"70px",height:"70px"}}
                  src={img}
                  alt="Card image cap"
                />
              </div>
              <div className="col">
                <ul style={{listStyle:"none",paddingLeft:"0px"}}>
                    <li className="fs-6">{title}</li>
                    <li className="text-muted">{price} $</li>
                </ul>
              </div>
            </div>

</>);
}