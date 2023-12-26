import { Avatar, Button, Chip, Grid, Input, TextField } from "@mui/material";
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
    const [detectedFaces, setDetectedFaces] = useState(["目标人脸 1", "目标人脸 2"]);
    const [selectedFace, setSelectedFace] = useState(null);
    const [generatedSpeeches, setGeneratedSpeeches] = useState(["生成语音 1 - 语种 A - 风格 X", "生成语音 2 - 语种 A - 风格 Y"]);
    const [selectedGeneratedSpeech, setSelectedGeneratedSpeech] = useState(null);

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

    const handleText2Speech = () => {

    }

    const handleSelectGeneratedSpeech = (speech) => {
        setSelectedGeneratedSpeech(speech);
    }

    const handleSubsituteSpeech = () => {

    }

    return (
        <div className="meta-human-platform mx-auto my-5">
            <p className="display-6 my-4">Tap-All: meta human</p>
            <Grid container columns={25}>
                <Grid className="display-div p-4" item xs={12}>
                    {/* <p className="fw-bold">视频上传</p> */}
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
                <Grid className="display-div p-4" item xs={12}>
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
                                        <div className="image-function-div">
                                            <p className="h-4">上传图片</p>
                                            <p className="h-4">目标人脸</p>
                                        </div>
                                        <div className="image-function-div mb-4">
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
                                    <div className="function-div">
                                        <div className="d-flex flex-column">
                                            <TextField
                                                id="text-input"
                                                label="目标文本"
                                                variant="outlined"
                                                multiline
                                                fullWidth
                                                minRows={3}
                                            />
                                            <Button className="mx-auto my-3" variant="outlined" onClick={handleText2Speech}>生成语音</Button>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div className="generated-speech-div mx-auto">
                                                {generatedSpeeches.map((speech, index) => (
                                                    <Chip
                                                        className="mx-auto my-1"
                                                        key={index}
                                                        variant={selectedGeneratedSpeech === speech ? "filled" : "outlined"}
                                                        color="primary"
                                                        label={speech}
                                                        onClick={() => handleSelectGeneratedSpeech(speech)}
                                                    />
                                                ))}
                                            </div>
                                            {selectedGeneratedSpeech &&
                                                <Button className="mx-auto mt-4" variant="contained" onClick={handleSubsituteSpeech}>驱动视频</Button>}
                                        </div>
                                    </div>
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