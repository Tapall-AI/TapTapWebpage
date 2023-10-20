import { CButton, CButtonGroup, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CContainer, CFormCheck, CRow } from "@coreui/react";
import "./Price.css";
import { useState } from "react";

export default function Price() {
    const priceInfos = {
        "priceMonth":
            [
                {
                    name: "基础版",
                    price: "💰10",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
                {
                    name: "标准版",
                    price: "💰20",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
                {
                    name: "专业版",
                    price: "💰30",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
                {
                    name: "企业版",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
            ],
        "priceYear":
            [
                {
                    name: "基础版",
                    price: "💰100",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
                {
                    name: "标准版",
                    price: "💰200",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
                {
                    name: "专业版",
                    price: "💰300",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
                {
                    name: "企业版",
                    action: "现在订阅",
                    features: [
                        "Feature 1: ...",
                        "Feature 2: ...",
                        "Feature 3: ...",
                    ]
                },
            ]
    };

    const [priceType, setPriceType] = useState("priceMonth");

    const handlePriceChange = (event) => {
        console.log(event);
        setPriceType(event.target.id);
    }

    return (
        <div className="price-div mx-auto">
            <CButtonGroup role="group">
                <CFormCheck
                    type="radio"
                    button={{ color: 'primary', variant: 'outline' }}
                    name="btnPrice"
                    id="priceMonth"
                    autoComplete="off"
                    checked={priceType === "priceMonth"}
                    onChange={handlePriceChange}
                    label="月费"
                />
                <CFormCheck
                    type="radio"
                    button={{ color: 'primary', variant: 'outline' }}
                    name="btnPrice"
                    id="priceYear"
                    autoComplete="off"
                    checked={priceType === "priceYear"}
                    onChange={handlePriceChange}
                    label="年费"
                />
            </CButtonGroup>
            <CContainer className="my-4">
                <CRow>
                    {priceInfos[priceType].map((priceInfo, idx) => (
                        <CCol key={idx}>
                            <CCard>
                                <CCardImage orientation="top" src="shopping-2.png" />
                                <CCardBody className="justify-div">
                                    <CCardTitle>{priceInfo.name}</CCardTitle>
                                    {priceInfo.price &&
                                        <CCardText>
                                            {priceInfo.price}
                                        </CCardText>
                                    }
                                    <CButton className="mb-3" href="#">{priceInfo.action}</CButton>
                                    {priceInfo.features.map((feature, i) => (
                                        <CCardText key={i}>{feature}</CCardText>
                                    ))}
                                </CCardBody>
                            </CCard>
                        </CCol>
                    ))}
                </CRow>
            </CContainer>
        </div>
    )
}