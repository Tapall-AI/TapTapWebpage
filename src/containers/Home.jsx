import { CButton, CCarousel, CCarouselItem, CCol, CContainer, CHeader, CHeaderBrand, CImage, CRow } from "@coreui/react";
import "./Home.css";
import CIcon from "@coreui/icons-react";
import { cibAndroid, cibAndroidAlt } from "@coreui/icons";

export default function Home() {

    return (
        <div className="home-div mx-auto">
            <CCarousel className="my-4 d-block h-30" controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="shopping-1.jpg" alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="shopping-2.png" alt="slide 2" />
                </CCarouselItem>
            </CCarousel>
            <p className="text-center fs-3 fw-bold">Tap-Tap is an application for shopping & advertising</p>
            <CButton className="w-25 mx-auto">立即尝试</CButton>
            
            <CHeader className="my-2"/>
            <p className="text-center fs-2">Tap4Shop</p>
            <CContainer className="my-1">
                <CRow>
                    <CCol className="align-div" xs={3}>
                        <CIcon icon={cibAndroidAlt} size="xxl"/>
                        <a href="/">&nbsp;: 下载链接</a>
                    </CCol>
                    <CCol className="align-div" xs={9}>
                        <p className="fs-5">Tap4Shop can identify the shopping item in the screen and get you the link to the item.</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CImage src="shopping-2.png" height={400}/>
                </CRow>
            </CContainer>

            <CHeader className="my-2"/>
            <p className="text-center fs-2">Tap4Ads</p>
            <CContainer className="my-1">
                <CRow>
                    <CCol className="align-div" xs={3}>
                        <CButton>立即尝试</CButton>
                    </CCol>
                    <CCol className="align-div" xs={9}>
                        <p className="fs-5">Tap4Ads can automatically incorporate shopping items into videos.</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CImage src="shopping-2.png" height={400}/>
                </CRow>
            </CContainer>
        </div>
    )
}