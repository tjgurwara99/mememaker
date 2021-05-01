import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import ModalPopup from "../ModalPopup";
import ImageList from "../ImageList";
import "./styles.css";


const MemeImage = (props) => {
  const [overlayClass, setOverlayClass] = useState("overlay-hidden");

  const [selectedMeme, setSelectedMeme] = useState({
    active: true,
    src: "images/Drake-Hotline-Bling.jpg",
    boxCount: 2,
    textBoxes: [
        {
            left: 350,
            top: 150,
            font: {
                type: "Normal",
                size: "12px"
            }
        },
        {
            left: 350,
            top: 350,
            font: {
                type: "Normal",
                size: "12px"
            }
        }
    ]
  });

  useEffect(() => {
    setSelectedMeme({
      active: true,
      src: "images/Drake-Hotline-Bling.jpg",
      boxCount: 2,
      textBoxes: [
          {
              text: "Text 1",
              left: 350,
              top: 150,
              font: {
                  type: "Normal",
                  size: "12px"
              }
          },
          {
              text: "Text 2",
              left: 350,
              top: 350,
              font: {
                  type: "Normal",
                  size: "12px"
              }
          }
      ]
    })
  }, [])

  // handleModalPopup is a simple handler for the popup overlay.
  const handleModalPopup = () => {
    if (overlayClass === "overlay-hidden") setOverlayClass("overlay");
    else setOverlayClass("overlay-hidden");
  };

  // handleScreenshot is a handler for the button to download the image that we worked on.
  const handleScreenshot = () => {
    const elemDisplay = document.getElementById("meme-image");
    domtoimage.toBlob(elemDisplay).then((blob) => {
      saveAs(blob, "image.png");
    });
  };

  return (
    <>
      <ImageList />

      <button onClick={handleModalPopup}>Show</button>

      <div id={overlayClass}>
        <ModalPopup popupHandler={handleModalPopup} screenshotHandler={handleScreenshot} meme={selectedMeme}/>
      </div>
    </>
  );
};

export default MemeImage;