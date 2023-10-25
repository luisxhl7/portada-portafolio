import React from "react";
import "./Star.scss"; 

export const Star = ({ left, top }) => {
    const style = {
        left: `${left}%`,
        top: `${top}%`,
    };

    return (
        <div className="star" style={style}>
        </div>
    )
};
