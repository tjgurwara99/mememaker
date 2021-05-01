import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import Button from "@material-ui/core/Button";

const TextBox = (props) => {
    return (
        <>
        <div className="meme-controls" >
            {
                props.meme.textBoxes.map((textBox, index) => (
                    <>
                    <div className="input-controller" key={`input-${index}`}>
                        <Button onClick={() => {
                            let temp = {...props.meme};
                            temp.textBoxes[index].top = textBox.top - 5;
                            props.setMeme(temp);
                        }}>
                            <ExpandLessIcon />
                        </Button>
                    
                        <div className="input-container">
                            <Button onClick={() => {
                                let temp = {...props.meme};
                                temp.textBoxes[index].left = textBox.left - 5;
                                props.setMeme(temp);
                            }}>
                                <ArrowLeftIcon />
                            </Button>
                            <input type="text" value={textBox.text} onChange={(e) => {
                                let temp = {...props.meme};
                                temp.textBoxes[index].text = e.target.value;
                                props.setMeme(temp);
                            }}/>
                            <Button onClick={() => {
                                let temp = {...props.meme};
                                temp.textBoxes[index].left = textBox.left + 5;
                                props.setMeme(temp);
                            }}>
                                <ArrowRightIcon />
                            </Button>
                        </div>
                        <Button onClick={() => {
                            let temp = {...props.meme};
                            temp.textBoxes[index].top = textBox.top + 5;
                            props.setMeme(temp);
                        }}>
                            <ExpandMoreIcon />
                        </Button>
                    </div>
                    <div className="input-navigation" key={`navigation-${index}`}>
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
                                <label>Choose Font Type</label>
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
                    </>
                ))
            }           
        </div>
        </>
    )
}

export default TextBox;