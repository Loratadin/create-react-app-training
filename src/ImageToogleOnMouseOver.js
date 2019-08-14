import React, { useRef } from "react";
import "./imageChangeOnMouseOver.css";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <img
            onMouseOver={() => {imageRef.current.src = secondaryImg }}
            onMouseOut={() => {imageRef.current.src = primaryImg}}
            src={primaryImg}
            alt=""
            ref={imageRef}
            className="images__image"
        />
    )
}

export default ImageToggleOnMouseOver;