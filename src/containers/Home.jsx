import { CButton, CButtonGroup, CCarousel, CCarouselItem, CCol, CContainer, CFormCheck, CHeader, CHeaderBrand, CImage, CRow } from "@coreui/react";
import "./Home.css";
import CIcon from "@coreui/icons-react";
import { cibAndroid, cibAndroidAlt } from "@coreui/icons";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [itemType, setItemType] = useState("tap4shop");
    const tap4shopRef = useRef(null);
    const tap4adRef = useRef(null);

    const handleItemChange = (event) => {
        let id = event.target.id;
        setItemType(id);
        // console.log("id: ", id)
        // let cardContainer = document.getElementById("card-container");
        // let targetCard = document.getElementById("card-" + id);
        // targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        // cardContainer.scrollIntoView({ behavior: "smooth"});
        if (id === 'tap4shop' && tap4shopRef.current) {
            tap4shopRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'tap4ad' && tap4adRef.current) {
            tap4adRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.8, // Adjust this threshold as needed
        };
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id.replace('card-', '');
              setItemType(id);
            }
          });
        }, options);
      
        if (tap4shopRef.current) {
          observer.observe(tap4shopRef.current);
        }
      
        if (tap4adRef.current) {
          observer.observe(tap4adRef.current);
        }
      
        return () => {
          if (tap4shopRef.current) {
            observer.unobserve(tap4shopRef.current);
          }
          if (tap4adRef.current) {
            observer.unobserve(tap4adRef.current);
          }
        };
      }, []);
      

    return (
        <div className="home-div mx-auto">
            {/* <CCarousel className="my-4 d-block h-30" controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="shopping-1.jpg" alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="shopping-2.png" alt="slide 2" />
                </CCarouselItem>
            </CCarousel> */}

            <div className="home-intro-div my-5">
                <div>
                    <p className="mt-5 text-center display-3 fw-bold">使用人工智能将您的图像和视频</p>
                    <p className="text-center display-3 fw-bold">提升到全新的水平</p>
                    <p className="text-center fs-4">无与伦比的人工智能工具，帮您创建和编辑媒体内容</p>
                </div>
                <CButton className="w-25 mx-auto mt-5" shape="rounded-pill">立即尝试</CButton>
            </div>

            <CContainer>
                <CRow className="items-div">
                    <CCol xs={3} className="items-menu-div">
                        <p className="fs-1">TAP-ALL 产品</p>
                        <CButtonGroup vertical>
                            <CFormCheck
                                type="radio"
                                button={{ color: 'primary', variant: 'ghost', size: "lg" }}
                                name="btnShop"
                                id="tap4shop"
                                autoComplete="off"
                                checked={itemType === "tap4shop"}
                                onChange={handleItemChange}
                                label="Tap4Shop"
                            />
                            <CFormCheck
                                type="radio"
                                button={{ color: 'primary', variant: 'ghost', size: "lg" }}
                                name="btnAd"
                                id="tap4ad"
                                autoComplete="off"
                                checked={itemType === "tap4ad"}
                                onChange={handleItemChange}
                                label="Tap4Ad"
                            />
                        </CButtonGroup>
                    </CCol>
                    <CCol id="card-container" xs={9} style={{ height: "75vh", overflowY: "scroll" }}>
                        <div id="card-tap4shop" ref={tap4shopRef} className="card-div my-5">
                            <p className="display-4">Tap4Shop</p>
                            <p className="fs-3">Tap4Shop can identify the shopping item in the screen and get you the link to the item.</p>
                            <CButton className="w-25 mb-4" variant="outline" color="info" href="/">
                                <CIcon icon={cibAndroidAlt} size="xxl" />
                                立即下载
                            </CButton>
                            <CImage src="shopping-2.png" height={400} />
                        </div>

                        <div id="card-tap4ad" ref={tap4adRef} className="card-div my-5">
                            <p className="display-4">Tap4Ad</p>
                            <p className="fs-3">Tap4Ads can automatically incorporate shopping items into videos.</p>
                            <CButton className="w-25 mb-4" variant="outline" color="info" href="/">
                                立即尝试
                            </CButton>
                            <CImage src="shopping-2.png" height={400} />
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}