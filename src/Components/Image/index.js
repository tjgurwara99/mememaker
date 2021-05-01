import React from "react";
import "./styles.css";

const Image = (props) => {    
    return (
        <img src={props.src} className="meme-image-display" alt="meme"></img>
    )
}

export default Image;