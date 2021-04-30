import React, { useState } from "react";
import {saveAs} from "file-saver";
import domtoimage from "dom-to-image";
import Image from "../Image";
import "./styles.css";

const MemeImage = (props) => {
    const [overlayClass, setOverlayClass] = useState("overlay-hidden")

    const handleModalPopup = () => {
        if (overlayClass === "overlay-hidden")
            setOverlayClass("overlay")
        else 
            setOverlayClass("overlay-hidden")
    }

    const handleScreenshot = () => {
        const elemDisplay = document.getElementById("meme-image")

        domtoimage.toBlob(elemDisplay).then(
            blob => {
                saveAs(blob, "image.png");
            }
        )
    }

    return (
        <>
        
        <div id="meme-image-list">
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <Image src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
        </div>

        <button onClick={handleModalPopup}>Show</button>

        <div id={overlayClass}>
            <div id="popup-window">
                <button onClick={handleModalPopup}>Hide</button> <br/>
                <div id="meme-image">
                    {/* <img src="images/Drake-Hotline-Bling.jpg" alt="meme" id="meme-image"></img> */}
                    <Image src="images/Drake-Hotline-Bling.jpg" /> 
                </div>
                <button onClick={handleScreenshot}>Get Image</button>
            </div>            
        </div>


        </>
    )
}

export default MemeImage;