import React, { useState, useEffect } from "react";
import ImageThumbnail from "../ImageThumbnail";

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
        <>
            <div id="meme-image-list">
                {
                    data.map((image, index) => (
                        <button key={index} style={{
                            "backgroundcolor": "Transparent",
                            "backgroundRepeat":"no-repeat",
                            "border": "none",
                            "cursor":"pointer",
                            "overflow": "hidden",
                            "outline":"none",
                            "background": "transparent",
                        }}
                        onClick={props.setMeme(image)}
                        >
                            <ImageThumbnail src={image.src} key={image.src}/>
                        </button>
                        
                    ))
                }
            </div>
        </>
    )
}

export default ImageList;