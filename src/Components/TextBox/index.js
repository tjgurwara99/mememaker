import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import Button from "@material-ui/core/Button";

const TextBox = (props) => {
    const [left, setLeft] = useState(100);
    const [top, setTop] = useState(100);
    
    return (
        <>
        <div className="meme-controls">
            <div className="meme-buttons">
                <button onClick={props.screenshotHandler}>Download Meme</button>
            </div>
            <div className="input-controls">
                <div className="input-controller">
                <Button onClick={() => setTop(prevState => prevState - 5)}>
                    <ExpandLessIcon />
                </Button>
                <div className="input-container">
                    <Button onClick={() => setLeft(prevState => prevState - 5)}>
                    <ArrowLeftIcon />
                    </Button>
                    <input type="text" />
                    <Button onClick={() => setLeft(prevState => prevState + 5)}>
                    <ArrowRightIcon />
                    </Button>
                </div>
                <Button onClick={() => setTop(prevState => prevState + 5)}>
                    <ExpandMoreIcon />
                </Button>
                </div>
                <div className="input-navigation">
                <div className="input-rotaters">
                    <button>
                    <RotateLeftIcon />
                    </button>
                    <button>
                    <RotateRightIcon />
                    </button>
                </div>
                <div className="input-font-controller">
                    <div className="font-selection-container">
                    <label>Choose a font:</label>

                    <select name="font" id="font">
                        <option value="normal">Normal</option>
                        <option value="shadowed">Shadowed</option>
                    </select>
                    </div>
                    <div className="font-size-controller">
                    <button className="font-increase">
                        <ExpandLessIcon />
                    </button>
                    <button className="font-decrease">
                        <ExpandMoreIcon />
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default TextBox;