import React, { useState, useEffect } from "react";
import ImageThumbnail from "../ImageThumbnail";
import "./style.css";
import Button from '@material-ui/core/Button';

const ImageList = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("data.json", {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [])

    return (
            <div className="meme-image-list">
                {
                    data.map((image, index) => (
                        <Button className="meme-button" key={index} style={{
                           
                        }}
                        onClick={
                            () => {
                                let temp = {...image};
                                props.setMeme(temp);
                            }
                        }
                        >
                            <ImageThumbnail src={image.src} key={image.src}/>
                        </Button>
                        
                    ))
                }
            </div>
    )
}

export default ImageList;