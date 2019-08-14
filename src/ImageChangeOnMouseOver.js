import React, { useState } from "react";
import "./imageChangeOnMouseOver.css";

const ImageChangeOnMouseOver = () => {
    return (
        <div className="images__container">
            <div className="images__image-wrap">
                <img src="/static/image-grayscale-1.jpg" alt="" className="images__image"/>
            </div>

            <img src="/static/image-grayscale-2.jpg" alt=""  className="images__image"/>
            <img src="/static/image-grayscale-3.jpg" alt=""  className="images__image"/>
            <img src="/static/image-grayscale-4.jpg" alt="" className="images__image"/>
        </div>
    )
}

export default ImageChangeOnMouseOver;