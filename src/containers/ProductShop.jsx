import { CButton, CCol, CContainer, CHeader, CImage, CRow } from "@coreui/react";
import "./ProductShop.css";
import CIcon from "@coreui/icons-react";
import { cibAndroidAlt } from "@coreui/icons";

export default function ProductShop() {

    return (
        <div className="shop-div mx-auto">
            <CContainer>
                <CRow>
                    <CCol sm={5} className="justify-div">
                        <p className="fs-4 fw-bold">Tap4Shop</p>
                        <p>Tap4Shop is an application that ...</p>
                        <CButton>
                            <CIcon icon={cibAndroidAlt} />
                            下载安卓应用
                        </CButton>
                    </CCol>
                    <CCol sm={7}>
                        <CImage height={300} src="shopping-1.jpg" />
                    </CCol>
                </CRow>
                <CHeader className="my-2" />
                <CRow>
                    <CCol sm={4} className="justify-div">
                        <p className="fs-4 fw-bold">Function 1</p>
                        <p>Tap4Shop can ...</p>
                        <CImage height={200} src="shopping-2.png" />
                    </CCol>
                    <CCol sm={4} className="justify-div">
                        <p className="fs-4 fw-bold">Function 2</p>
                        <p>Tap4Shop can ...</p>
                        <CImage height={200} src="shopping-2.png" />
                    </CCol>
                    <CCol sm={4} className="justify-div">
                        <p className="fs-4 fw-bold">Function 3</p>
                        <p>Tap4Shop can ...</p>
                        <CImage height={200} src="shopping-2.png" />
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}