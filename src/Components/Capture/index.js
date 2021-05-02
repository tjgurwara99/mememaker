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

              style={{
                position: "absolute",
                left: `${textBox.left}px`,
                top: `${textBox.top}px`,
                fontSize: `${textBox.font.size}px`
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