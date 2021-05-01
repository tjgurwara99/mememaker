import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import TextBox from "../TextBox";
import Capture from "../Capture";

const ModalPopup = (props) => {
  const [meme, setMeme] = useState(props.meme);

  useEffect(() => {
    setMeme(props.meme)
  }, [props.meme])

  return (
      <div id="popup-window">
        <Button onClick={props.popupHandler} style={{position: "fixed", right: "20px"}}>
          <CloseIcon />
        </Button>
        <Capture meme={meme}/>
        <TextBox screenshotHandler={props.screenshotHandler} meme={meme} setMeme={setMeme} />
        <div className="meme-buttons">
            <Button variant="contained" onClick={props.screenshotHandler}>Download Meme</Button>
        </div>
      </div>
  )
}

export default ModalPopup;