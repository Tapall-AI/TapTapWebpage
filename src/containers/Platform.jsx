import { CButton, CCol, CContainer, CFormInput, CRow } from "@coreui/react";
import { useState, useRef } from "react";
import "./Platform.css";

function Platform(props) {
    const videoWidth = 600;
    const videoHeight = 400;
    const framesNum = 20;
    const videoRef = useRef(null);
    const [keyFrames, setKeyFrames] = useState([]);
    const [selectedFrame, setSelectedFrame] = useState(null);
    const [clickPosition, setClickPosition] = useState(null);
    const [colorBackgrounds, setColorBackground] = useState([
        '#ffffff', // White
        '#000000', // Black
        '#808080', // Gray
        '#ff0000', // Red
        '#00ff00', // Lime
        '#0000ff', // Blue
        '#ffff00', // Yellow
        '#ff00ff', // Fuchsia
        '#00ffff', // Aqua
        '#800000', // Maroon
        '#008000', // Green
        '#000080', // Navy

        '#ffff00', // Yellow
        '#ff00ff', // Fuchsia
        '#00ffff', // Aqua
        '#800000', // Maroon
        '#008000', // Green
        '#000080', // Navy
    ]);
    const [imageBackgrounds, setImageBackgrounds] = useState([]);
    const [selectedBackground, setSelectedBackground] = useState(null);

    const handleVideoUpload = () => {
        let t = 0;
        let videoUploadInput = document.getElementById('video-upload');
        let file = videoUploadInput.files[0];

        // split the video into key frames and store in keyFrames
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);

        video.addEventListener('loadeddata', async () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const { videoWidth, videoHeight } = video;

            canvas.width = videoWidth;
            canvas.height = videoHeight;

            const interval = video.duration / framesNum; // Set the interval to capture frames (in seconds)
            const frames = [];

            for (t = 0; t < video.duration; t += interval) {
                video.currentTime = t;
                await new Promise((resolve) => video.addEventListener('seeked', resolve));
                context.drawImage(video, 0, 0, videoWidth, videoHeight);
                const dataURL = canvas.toDataURL('image/jpeg');
                frames.push(dataURL);
            }

            setKeyFrames(frames);
            setSelectedFrame(frames[0]);
        });
    }

    const handleImageClick = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;
        setClickPosition({ x: offsetX, y: offsetY });
    };

    const handleImageUpload = () => {
        let uploadedImages = document.getElementById('image-upload');
        const images = [...imageBackgrounds];

        // add the uploaded images into images
        for (const file of uploadedImages.files) {
            const reader = new FileReader();

            reader.onload = (e) => {
                images.push(e.target.result);
                setImageBackgrounds([...images]);
            };

            reader.readAsDataURL(file);
        }

        document.getElementById('image-upload').value = null;
    }

    return (
        <CContainer>
            <CRow className="mt-5">
                <CCol xs={6}>
                    <div className="selected-frame-div" onClick={handleImageClick}>
                        <>
                            <img
                                src={selectedFrame}
                                alt="Selected Frame"
                                style={{ width: "100%" }}
                            />
                            {clickPosition && (
                                <div
                                    className="red-dot"
                                    style={{
                                        position: "absolute",
                                        top: `${clickPosition.y}px`,
                                        left: `${clickPosition.x}px`,
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "red",
                                    }}
                                ></div>
                            )}
                        </>
                    </div>
                </CCol>
                <CCol xs={6}>
                    <video ref={videoRef} controls width={videoWidth} height={videoHeight} />
                </CCol>
            </CRow>
            <CRow className="my-1">
                <CCol xs={6} className="button-bar">
                    <CButton>Positive</CButton>
                    <CButton>Negative</CButton>
                    <CButton>清除点击</CButton>
                </CCol>
                <CCol xs={6} className="button-bar">
                    <CButton>去除背景</CButton>
                    <CButton>导出视频</CButton>
                </CCol>
            </CRow>
            <CRow className="my-5">
                <CCol xs={6}>
                    <div className="frames-div">
                        {keyFrames.map((frame, index) => (
                            <img
                                key={index}
                                src={frame}
                                alt={`Key Frame ${index}`}
                                style={{
                                    width: '18%',
                                    margin: '5px',
                                    border: selectedFrame === frame ? '2px solid red' : 'none',
                                }}
                                onClick={() => setSelectedFrame(frame)}
                            />
                        ))}
                    </div>
                    <CFormInput type="file" id="video-upload" accept="video/*" onChange={handleVideoUpload} />
                </CCol>
                <CCol xs={6}>
                    <div className="background-div">
                        <div className="color-background-div">
                            {colorBackgrounds.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '2px',
                                        border: selectedBackground === color ? '2px solid red' : '2px solid black',
                                        backgroundColor: color,
                                        flex: "0 0 auto"
                                    }}
                                    onClick={() => setSelectedBackground(color)}
                                />
                            ))}
                        </div>
                        <div className="image-background-div">
                            {imageBackgrounds.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    style={{
                                        width: '100px',
                                        height: '75px',
                                        margin: '5px',
                                        border: selectedBackground === image ? '2px solid red' : 'none',
                                        flex: "0 0 auto"
                                    }}
                                    onClick={() => setSelectedBackground(image)}
                                />
                            ))}
                            <CFormInput type="file" id="image-upload" accept="image/*" onChange={handleImageUpload} />
                        </div>
                    </div>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default Platform;