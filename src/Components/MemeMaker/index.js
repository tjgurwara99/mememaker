import React, { useState } from "react";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
// import ModalPopup from "../ModalPopup";
import ImageList from "../ImageList";
import Frame from "../Frame";
import "./styles.css";


const MemeMaker = (props) => {
  const [selectedMeme, setSelectedMeme] = useState({
    active: true,
    src: "images/placeholder.jpg",
    textBoxes: []
  });

  // handleScreenshot is a handler for the button to download the image that we worked on.
  const handleScreenshot = () => {
    const elemDisplay = document.getElementById("meme-image");
    domtoimage.toBlob(elemDisplay).then((blob) => {
      saveAs(blob, "image.png");
    });
  };

  return (
    <div className="main-body">
      <ImageList setMeme={setSelectedMeme} />

      <Frame screenshotHandler={handleScreenshot} meme={selectedMeme} />
    </div>
  );
};

export default MemeMaker;