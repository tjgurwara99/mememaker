import React from "react";
import Image from "../Image";
import "./styles.css"

const Capture = (props) => {

  return (
    <div id="meme-image">
      <Image src={props.meme.src} />
      <div className="text-box-container">
        {
          props.meme.textBoxes.map((textBox, i) => (
            <div
              key={i}
              className={textBox.font.type}
              id={`text-box-height-modifier-${i}`}
              style={{
                position: "absolute",
                left: `${textBox.left}px`,
                top: `${textBox.top}px`,
                fontSize: `${textBox.font.size}px`,
                transform: `rotate(${textBox.font.rotation}deg)`,
                width: `${textBox.width}px`,
                lineBreak: "anywhere",
                textAlign: "center"
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