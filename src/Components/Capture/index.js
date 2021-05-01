import React from "react";
import Image from "../Image";

const Capture = (props) => {
  return (
    <div id="meme-image">
      <Image src={props.meme.src} />
      <div className="text-box-container">
        {
          props.meme.textBoxes.map((textBox, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${textBox.left}px`,
                top: `${textBox.top}px`
              }}
            >
          {textBox.text}
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Capture