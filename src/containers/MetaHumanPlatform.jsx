import { Avatar, Button, Grid, Input } from "@mui/material";
import { useRef, useState } from "react";
import "./MetaHumanPlatform.css";

function MetaHumanPlatform() {
    const imageWidth = 250;
    const imageHeight = 250;
    const videoWidth = 600;
    const videoHeight = 400;
    const videoRef = useRef(null);
    const [functionMode, setFunctionMode] = useState("");
    const [uploadedImage, setUploadImage] = useState(null);
    const [videoUploaded, setVideoUploaded] = useState(false);
    const [detectedFaces, setDetectedFaces] = useState(["A", "b", "C", "D", "E"]);
    const [selectedFace, setSelectedFace] = useState(null);

    const changeMode = (mode) => {
        setFunctionMode(mode);
    }

    const handleVideoUpload = (event) => {
        let file = event.target.files[0];

        if (file) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            videoRef.current.src = video.src;
            setVideoUploaded(true);
        }
    }

    const handleImageUpload = (event) => {
        let image = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setUploadImage(e.target.result);
        };

        reader.readAsDataURL(image);
    }

    const saveVideo = () => {
        const a = document.createElement('a');
        a.href = videoRef.current?.src;
        a.download = 'meta-human-video.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    const handleSubsituteFace = () => {

    }

    return (
        <div className="meta-human-platform mx-auto my-5">
            <p className="h2 my-4">Tap-All: meta human</p>
            <Grid container>
                <Grid className="p-3" item xs={5}>
                    <video ref={videoRef} controls width="100%" />
                    <div className="function-bar my-3">
                        <label htmlFor="video-upload">
                            <Button variant="outlined" component="span">
                                上传视频
                                <input style={{ display: "none" }} type="file" id="video-upload" accept="video/*" onChange={handleVideoUpload} />
                            </Button>
                            {videoUploaded && <Button variant="outlined" onClick={saveVideo}>保存视频</Button>}
                        </label>
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid className="p-3" item xs={6}>
                    <div className="function-bar mb-4">
                        <Button variant={functionMode === "image" ? "contained" : "outlined"} onClick={() => changeMode("image")}>人脸替换</Button>
                        <Button variant={functionMode === "text" ? "contained" : "outlined"} onClick={() => changeMode("text")}>文本驱动</Button>
                        <Button variant={functionMode === "audio" ? "contained" : "outlined"} onClick={() => changeMode("audio")}>语音驱动</Button>
                    </div>
                    {(() => {
                        switch (functionMode) {
                            case "image":
                                return (
                                    <div className="function-div">
                                        <p>Instruction....</p>
                                        <div className="image-function-div">
                                            <input style={{ display: "none" }} type="file" id="image-upload" accept="image/*" onChange={handleImageUpload} />
                                            {/* <img src={uploadedImage} width={imageWidth} height={imageHeight} /> */}
                                            <label htmlFor="image-upload">
                                                <Avatar src={uploadedImage} sx={{ width: imageHeight, height: imageWidth, cursor: 'pointer' }} />
                                            </label>
                                            <div className="detected-faces-div">
                                                {detectedFaces.map((face, index) => (
                                                    <Avatar
                                                        key={index}
                                                        src={face}
                                                        alt={`Detected Face ${index}`}
                                                        sx={{
                                                            width: imageWidth,
                                                            height: imageWidth,
                                                            marginBottom: "10px",
                                                            border: selectedFace === face ? '2px solid red' : 'none',
                                                        }}
                                                        onClick={() => setSelectedFace(face)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <Button className="mx-auto" variant="outlined" onClick={handleSubsituteFace}>开始替换</Button>
                                    </div>
                                );
                            case "text":
                                return (
                                    <>
                                    </>
                                );
                            case "audio":
                                return (
                                    <>
                                    </>
                                );
                            default:
                                break;
                        }
                    })()}
                </Grid>
            </Grid>
        </div>
    )
}

export default MetaHumanPlatform;