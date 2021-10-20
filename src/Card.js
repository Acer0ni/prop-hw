import React from "react";

const Card1 = (prop) =>{
    return(
        <div className="weather">
        <img src={prop.img} alt="" />
        <p><span>conditions:</span> {prop.condition}</p>
        <p><span>time:</span> {prop.time}</p>
      </div>
    );
}
export default Card1