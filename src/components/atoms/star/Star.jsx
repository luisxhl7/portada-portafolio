import React from "react";
import "./Star.scss"; 

export const Star = ({ left, top }) => {
    const style = {
        left: `${left}px`,
        top: `${top}px`,
    };

    return (
        <div className="star" style={style}>

        </div>
    )
};
