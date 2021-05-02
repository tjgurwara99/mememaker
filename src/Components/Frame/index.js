import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Capture from '../Capture'
import TextBox from '../TextBox'
import "./styles.css"

function Frame(props) {
    const [meme, setMeme] = useState(props.meme);

    useEffect(() => {
        setMeme(props.meme)
    }, [props.meme])
    return (
        <div className="editor-frame">
            <div className="image-container-download-button">
                <div className="image-container">
                    <Capture meme={meme}/>
                </div>
                <div className="download-button">
                    <Button variant="contained" onClick={props.screenshotHandler}>Download Meme</Button>
                </div>
            </div>
            <div className="text-input-block">
            <TextBox screenshotHandler={props.screenshotHandler} meme={meme} setMeme={setMeme} />
            </div>
        </div>
    )
}

export default Frame
