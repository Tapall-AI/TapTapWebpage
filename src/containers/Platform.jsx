import { CButton, CButtonGroup, CCol, CContainer, CRow } from "@coreui/react";
import { useState } from "react";
import "./Platform.css";

function Platform(props) {
    const videoWidth = 600;
    const videoHeight = 400;
    const [actionVideo, setActionVideo] = useState(null);

    return (
        <CContainer>
            <CRow className="mt-5">
                <CCol xs={6}>
                    <video src={actionVideo} controls width={videoWidth} height={videoHeight} />

                </CCol>
                <CCol xs={6}>

                </CCol>
            </CRow>
            <CRow className="my-1">
                <CCol xs={6} className="button-bar">
                    <CButton>上传视频</CButton>
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

                </CCol>
                <CCol xs={6}>

                </CCol>
            </CRow>
        </CContainer>
    )
}

export default Platform;