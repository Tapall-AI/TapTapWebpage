import { Avatar, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useRef, useState } from "react";
import "./MetaHumanPlatform.css";
import axios from "axios";

function MetaHumanPlatform() {
    const imageWidth = 250;
    const imageHeight = 250;
    const videoWidth = 600;
    const videoHeight = 400;
    const videoRef = useRef(null);
    const [functionMode, setFunctionMode] = useState("");
    const [uploadedImage, setUploadImage] = useState(null);
    const [videoUploaded, setVideoUploaded] = useState(false);
    const [detectedFaces, setDetectedFaces] = useState([]);
    const [selectedFace, setSelectedFace] = useState(null);
    const [generatedAudios, setGeneratedAudios] = useState([]);
    const [selectedGeneratedAudio, setSelectedGeneratedAudio] = useState(null);
    const [openAudioMimicDialog, setOpenAudioMimicDialog] = useState(false);
    const [selectedTargetAudio, setSelectedTargetAudio] = useState(null);
    const [selectedSampleAudio, setSelectedSampleAudio] = useState(null);

    const changeMode = (mode) => {
        setFunctionMode(mode);
    }

    // 用户上传视频，传给后端作为全局变量
    const handleVideoUpload = (event) => {
        let file = event.target.files[0];

        if (file) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            videoRef.current.src = video.src;
            setVideoUploaded(true);

            axios
                .post(window.BACKEND_ADDRESS + "/upload-video")
                .then((resp) => {

                })
        }
    }

    // 用户上传图片，传给后端作为全局变量
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

    // 点击检测，后端返回可进行更换的人脸目标
    const handleDetectFace = () => {
        axios
            .post(window.BACKEND_ADDRESS + "/face-detect")
            .then((resp) => {

            })
    }

    // 点击替换，后端返回修改后视频
    const handleSubsituteFace = () => {
        axios
            .post(window.BACKEND_ADDRESS + "/upload-face")
            .then((resp) => {

            })
    }

    // 文本生成语音
    const handleText2Audio = () => {

    }

    // 上传语音
    const handleUploadAudio = () => {
        axios
            .post(window.BACKEND_ADDRESS + "/upload-face")
            .then((resp) => {

            })
    }

    // 语音模仿
    const handleMimicAudio = () => {
        setOpenAudioMimicDialog(true);
    }

    const handleTargetAudioSelectChange = () => {

    }

    const handleSampleAudioSelectChange = () => {

    }

    const handleCancelMimicAudio = () => {
        setOpenAudioMimicDialog(false);
        setSelectedTargetAudio(null);
        setSelectedSampleAudio(null);
    }

    const handleGenerateMimicAudio = () => {

    }

    // 语音驱动：嘴形模仿，后端返回视频
    const handleSubsituteAudio = () => {
        axios
            .post(window.BACKEND_ADDRESS + "/video-talk")
            .then((resp) => {

            })
    }

    const handleSelectGeneratedAudio = (audio) => {
        setSelectedGeneratedAudio(audio);
    }

    return (
        <div className="meta-human-platform mx-auto my-5">
            <p className="display-6 my-4">Tap-All: meta human</p>
            <Grid container columns={25}>
                <Grid className="display-div p-4" item xs={12}>
                    {/* <p className="fw-bold">视频上传</p> */}
                    <video ref={videoRef} controls width="100%" height={videoHeight} />
                    <div className="function-bar my-3">
                        <label htmlFor="video-upload">
                            <Button variant="outlined" component="span">
                                上传视频
                                <input style={{ display: "none" }} type="file" id="video-upload" accept="video/*" onChange={handleVideoUpload} />
                            </Button>
                        </label>
                        {videoUploaded && <Button variant="outlined" onClick={saveVideo}>保存视频</Button>}
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid className="display-div p-4" item xs={12}>
                    <div className="function-bar mb-4">
                        <Button variant={functionMode === "image" ? "contained" : "outlined"} onClick={() => changeMode("image")}>人脸替换</Button>
                        {/* <Button variant={functionMode === "text" ? "contained" : "outlined"} onClick={() => changeMode("text")}>文本驱动</Button> */}
                        <Button variant={functionMode === "audio" ? "contained" : "outlined"} onClick={() => changeMode("audio")}>语音驱动</Button>
                    </div>
                    {(() => {
                        switch (functionMode) {
                            // 人脸替换功能
                            case "image":
                                return (
                                    <div className="function-div">
                                        <div className="image-function-div">
                                            <p className="h-4">上传图片</p>
                                            <p className="h-4">目标人脸</p>
                                        </div>
                                        <div className="image-function-div mb-4">
                                            <input style={{ display: "none" }} type="file" id="image-upload" accept="image/*" onChange={handleImageUpload} />
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
                                        <div className="d-flex">
                                            <Button className="mx-auto" variant="outlined" onClick={handleSubsituteFace}>替换人脸</Button>
                                            <Button className="mx-auto" variant="outlined" onClick={handleDetectFace}>检测人脸</Button>
                                        </div>
                                    </div>
                                );
                            // 语音驱动功能
                            case "audio":
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
                                            <div className="d-flex justify-content-center my-3">
                                                <Button variant="outlined" onClick={handleText2Audio}>生成语音</Button>
                                                <label htmlFor="audio-upload" className="ms-3">
                                                    <Button variant="outlined" component="span">
                                                        上传语音
                                                        <input style={{ display: "none" }} type="file" id="audio-upload" accept="audio/*" onChange={handleUploadAudio} />
                                                    </Button>
                                                </label>
                                                <Button className="ms-3" variant="outlined" onClick={handleMimicAudio}>语音模仿</Button>
                                                <Dialog open={openAudioMimicDialog} >
                                                    <DialogTitle>语音模仿</DialogTitle>
                                                    <DialogContent dividers>
                                                        <DialogContentText>
                                                            选择目标语音与样本语音
                                                        </DialogContentText>

                                                        <div className="d-flex justify-content-around">
                                                            <FormControl sx={{ minWidth: 200, m: 2 }}>
                                                                <InputLabel id="target-audio-select-label">目标语音</InputLabel>
                                                                <Select
                                                                    labelId="target-audio-select-label"
                                                                    id="target-audio-select"
                                                                    value={selectedTargetAudio}
                                                                    label="目标语音"
                                                                    onChange={handleTargetAudioSelectChange}
                                                                >
                                                                    {generatedAudios.map((audio, index) => (
                                                                        <MenuItem key={index} value={audio}>
                                                                            {audio}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                            <FormControl sx={{ minWidth: 200, m: 2 }}>
                                                                <InputLabel id="sample-audio-select-label">样本语音</InputLabel>
                                                                <Select
                                                                    labelId="sample-audio-select-label"
                                                                    id="sample-audio-select"
                                                                    sx={{ minWidth: "200px" }}
                                                                    value={selectedSampleAudio}
                                                                    label="样本语音"
                                                                    onChange={handleSampleAudioSelectChange}
                                                                >
                                                                    {generatedAudios.map((audio, index) => (
                                                                        <MenuItem key={index} value={audio}>
                                                                            {audio}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button variant="outlined" color="error" onClick={handleCancelMimicAudio}>取消</Button>
                                                        <Button variant="outlined" onClick={handleGenerateMimicAudio}>生成语音</Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="h6 mx-auto">语音库</p>
                                            <div className="generated-audio-div mx-auto">
                                                {generatedAudios.map((audio, index) => (
                                                    <Chip
                                                        className="mx-auto my-1"
                                                        key={index}
                                                        variant={selectedGeneratedAudio === audio ? "filled" : "outlined"}
                                                        color="primary"
                                                        label={audio}
                                                        onClick={() => handleSelectGeneratedAudio(audio)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <Button className="mx-auto mt-4" variant="contained"
                                            disabled={selectedGeneratedAudio === null}
                                            onClick={handleSubsituteAudio}>
                                            驱动视频
                                        </Button>
                                    </div>
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