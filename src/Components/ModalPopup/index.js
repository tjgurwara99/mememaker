import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import TextBox from "../TextBox";
import Capture from "../Capture";

const ModalPopup = (props) => {
  return (
      <div id="popup-window">
        <Button onClick={props.popupHandler} style={{position: "fixed", right: "20px"}}>
          <CloseIcon />
        </Button>
        <Capture meme={props.meme}/>
        <TextBox screenshotHandler={props.screenshotHandler}/>
      </div>
  )
}

export default ModalPopup;