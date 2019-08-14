import React from "react";
import ImageToogleOnMouseOver from "./ImageToogleOnMouseOver";
import { images } from "./utils.js";
import "./imageChangeOnMouseOver.css";

const ImageChangeOnMouseOver = () => {
    return (
        <div className="horizontal-images__container">
            {images.map(image => (
                <div className="horizontal-images__image-wrap">
                    <ImageToogleOnMouseOver
                        primaryImg={image.grayscaleVersion}
                        secondaryImg={image.colorfulVersion}
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageChangeOnMouseOver;