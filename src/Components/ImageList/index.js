import React, { useState, useEffect } from "react";
import ImageThumbnail from "../ImageThumbnail";
import "./style.css";
import Box from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          margin: "10px",
          padding: "10px"
        }
      }
    }
  });

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
                        <MuiThemeProvider theme={theme} key={index}>
                            <Box disabled={!image.active}
                            className="meme-button" variant="contained"
                            onClick={
                                () => {
                                    let temp = {...image};
                                    props.setMeme(temp);
                                }
                            }
                            >
                                <ImageThumbnail src={image.src} disabled={!image.active} />
                            </Box>
                        </MuiThemeProvider>
                    ))
                }
            </div>
    )
}

export default ImageList;