import React, { useState, useCallback } from "react";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import ModalPopup from "../ModalPopup";
import ImageList from "../ImageList";
import "./styles.css";


const MemeImage = (props) => {
  const [overlayClass, setOverlayClass] = useState("overlay-hidden");

  const [selectedMeme, setSelectedMeme] = useState({textBoxes: []});

  // handleModalPopup is a simple handler for the popup overlay.
  const handleModalPopup = useCallback(() => {
      if (overlayClass === "overlay-hidden") {
        setOverlayClass("overlay");
      }
      else setOverlayClass("overlay-hidden");
  }, [overlayClass])

  // handleScreenshot is a handler for the button to download the image that we worked on.
  const handleScreenshot = () => {
    const elemDisplay = document.getElementById("meme-image");
    domtoimage.toBlob(elemDisplay).then((blob) => {
      saveAs(blob, "image.png");
    });
  };

  return (
    <>
      <ImageList setMeme={setSelectedMeme} openModal={handleModalPopup}/>

      <button onClick={handleModalPopup}>Show</button>

      <div id={overlayClass}>
        <ModalPopup popupHandler={handleModalPopup} screenshotHandler={handleScreenshot} meme={selectedMeme}/>
      </div>
    </>
  );
};

export default MemeImage;