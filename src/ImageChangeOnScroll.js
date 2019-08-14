import React from "react";
import ImageToogleOnScroll from "./ImageToogleOnScroll";
import { images } from "./utils.js";
import "./imageChangeOnScroll.css";

const ImageChangeOnScroll = () => {
    return (
        <div className="vertical-images__container">
            {images.map(image => (
                <div className="vertical-images__image-wrap">
                    <ImageToogleOnScroll
                        primaryImg={image.grayscaleVersion}
                        secondaryImg={image.colorfulVersion}
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageChangeOnScroll;