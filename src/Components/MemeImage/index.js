import React, { useState } from "react";
import {saveAs} from "file-saver";
import domtoimage from "dom-to-image";
import Image from "../Image";
import ImageThumbnail from "../ImageThumbnail";
import "./styles.css";

const MemeImage = (props) => {
    const [overlayClass, setOverlayClass] = useState("overlay-hidden")
    const [font, setFont] = useState(["arial", "helvetica"])
    const [top, setTop] = useState(50)
    const [left, setLeft] = useState(50)



    // handleModalPopup is a simple handler for the popup overlay.
    const handleModalPopup = () => {
        if (overlayClass === "overlay-hidden")
            setOverlayClass("overlay")
        else 
            setOverlayClass("overlay-hidden")
    }


    // handleScreenshot is a handler for the button to download the image that we worked on.
    const handleScreenshot = () => {
        const elemDisplay = document.getElementById("meme-image")
        domtoimage.toBlob(elemDisplay).then(
            blob => {
                saveAs(blob, "image.png");
            }
        )
    }

const adjustTop = () =>{
    setTop(top-1);
}

    return (
        <>
        <div id="meme-image-list">
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
            <ImageThumbnail src="images/Drake-Hotline-Bling.jpg" thumbnail={true}/>
        </div>

        <button onClick={handleModalPopup}>Show</button>

        <div id={overlayClass}>
            <div id="popup-window">
                <div id="meme-image">
                    <Image src="images/Drake-Hotline-Bling.jpg" />
                    <div className="text-box-container">
                    <div className="text-box1" style={{position: "absolute", left: {left}, top: `${top}px`}}>Hello there</div>
                    </div> 
                   
                    <div className="text-box2">What you doing?</div>
                </div>

                <button onClick={adjustTop}> Top position </button>
                <button onClick={handleScreenshot}>Get Image</button>
                <button onClick={handleModalPopup}>Hide</button>
            </div>        

            <div className="input-text-box-container">
                 
            </div> 
        </div>


        </>
    )
}

export default MemeImage;



/* 

images: [
    {
        active: true,
        src: "",
        boxCount: 2,
        textBox1: {
            left: 80px,
            top: 80px,
            font: {
                family: "arial",
                size: 40em,
            }
        },
        textBox2: {
            left: 100px,
            top: 100px,
            font: {
                family: "arial",
                size: 40em,
            }
        },
    }
]

*/