import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import Button from "@material-ui/core/Button";
import "./styles.css"

const TextBox = (props) => {
    const [height, setHeight] = useState(0);

    return (
        <>
        <div className="meme-controls" >
            {
                props.meme.textBoxes.map((textBox, index) => (
                    <div key={index} className="control-block">
                    <div className="input-controller">
                        <div className="input-container">
                        <Button onClick={() => {
                            let temp = {...props.meme};
                            temp.textBoxes[index].top = textBox.top - 5;
                            props.setMeme(temp);
                        }}>
                            <ExpandLessIcon />
                        </Button>
                        </div>
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
                                const ht = document.getElementById(`text-box-height-modifier-${index}`).clientHeight;
                                if (ht !== height) {
                                    setHeight(ht);
                                    temp.textBoxes[index].top = temp.textBoxes[index].top - ((ht) / 10);
                                }
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
                        <div className="input-container">
                        <Button onClick={() => {
                            let temp = {...props.meme};
                            temp.textBoxes[index].top = textBox.top + 5;
                            props.setMeme(temp);
                        }}>
                            <ExpandMoreIcon />
                        </Button>
                        </div>
                    </div>
                    <div className="input-navigation" >
                        <div className="input-rotaters">
                            <Button onClick={() => {
                                let temp = {...props.meme};
                                temp.textBoxes[index].font.rotation = textBox.font.rotation - 10;
                                props.setMeme(temp);
                            }}>
                                <RotateLeftIcon />
                            </Button>
                            <Button onClick={() => {
                                let temp = {...props.meme};
                                temp.textBoxes[index].font.rotation = textBox.font.rotation + 10;
                                props.setMeme(temp);
                            }}>
                                <RotateRightIcon />
                            </Button>
                        </div>
                        <div className="input-font-controller">
                            <div className="font-selection-container">
                                <label className="font-type-label">Choose Font Type</label>
                                <select name="font" id="font">
                                    <option value="normal">Normal</option>
                                    <option value="shadowed">Shadowed</option>
                                </select>
                            </div>
                            <div className="font-size-controller">
                                <Button className="font-increase" onClick={() => {
                                    let temp = {...props.meme};
                                    temp.textBoxes[index].font.size = textBox.font.size + 2;
                                    props.setMeme(temp);
                                }}>
                                    <ExpandLessIcon />
                                </Button>
                                <Button className="font-decrease" onClick={() => {
                                    let temp = {...props.meme};
                                    temp.textBoxes[index].font.size = textBox.font.size - 2;
                                    props.setMeme(temp);
                                }}>
                                    <ExpandMoreIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                    </div>
                ))
            }           
        </div>
        </>
    )
}

export default TextBox;