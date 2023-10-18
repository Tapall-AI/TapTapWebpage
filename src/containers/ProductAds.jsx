import { CButton, CCol, CContainer, CHeader, CImage, CRow } from "@coreui/react";
import "./ProductAds.css";

export default function ProductAds() {

    return (
        <div className="ads-div mx-auto">
            <CContainer>
                <CRow>
                    <CCol sm={5} className="justify-div">
                        <p className="fs-4 fw-bold">Tap4Ads</p>
                        <p>Tap4Ads is a platform that ...</p>
                        <CButton>立即尝试</CButton>
                    </CCol>
                    <CCol sm={7}>
                        <CImage height={300} src="shopping-1.jpg" />
                    </CCol>
                </CRow>
                <CHeader className="my-2" />
                <CRow>
                    <CCol sm={5} className="justify-div">
                        <p className="fs-4 fw-bold">Function 1</p>
                        <p>Tap4Ads can ...</p>
                        <CImage height={200} src="shopping-2.png"/>
                    </CCol>
                    <CCol sm={7}>
                        <CImage height={300} src="shopping-1.jpg" />
                    </CCol>
                </CRow>
                <CHeader className="my-2" />
                <CRow>
                    <CCol sm={5} className="justify-div">
                        <p className="fs-4 fw-bold">Function 2</p>
                        <p>Tap4Ads can ...</p>
                        <CImage height={200} src="shopping-2.png"/>
                    </CCol>
                    <CCol sm={7}>
                        <CImage height={300} src="shopping-1.jpg" />
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}