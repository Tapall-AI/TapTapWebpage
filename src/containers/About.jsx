import { CCol, CContainer, CHeader, CImage, CRow } from "@coreui/react";
import "./About.css";

export default function About() {

    const companyIntro = "广州筷子信息科技有限公司（kuaizi.ai）是服务于内容商业生态的智能创意技术提供商，基于内容元素解构方法论AI人工智能、云计算、创意内容大数据等核心技术，通过创意智能生产、运营优化、标签洞察、协作管理的一站式SaaS解决方案，链接全球数字化内容商业生态全链路，加快上千万品牌商家、互联网企业及内容服务商实现商业增长。";
    
    return (
        <div className="about-div mx-auto">
            <div className="about-intro-div mb-5">
                <p className="my-auto text-center display-3 fw-bold">迈向未来的，企业级创意智能生产和协作增长平台</p>
            </div>

            <CContainer className="mt-5 mb-5">
                <CRow>
                    <CCol xs={6}>
                        <p className="display-6 fw-bold">公司简介</p>
                        <p className="fs-3">{companyIntro}</p>
                    </CCol>
                    <CCol xs={1}></CCol>
                    <CCol xs={5}>
                        <CImage src="about-company-img.webp" height={360}/>
                    </CCol>
                </CRow>
            </CContainer>

            <p className="mt-5 text-center display-6 fw-bold">我们的愿景</p>
            <CContainer className="mt-4">
                <CRow>
                    <CCol xs={4}>
                        <CImage src="about-goal.webp" height={200}/>
                        <p className="mt-4 fs-3 fw-bold">愿景1</p>
                        <p className="fs-5">成为全球内容商家及服务商的「吃饭工具」</p>
                    </CCol>
                    <CCol xs={4}>
                        <CImage src="about-goal.webp" height={200}/>
                        <p className="mt-4 fs-3 fw-bold">愿景2</p>
                        <p className="fs-5">成为全球内容商家及服务商的「吃饭工具」</p>
                    </CCol>
                    <CCol xs={4}>
                        <CImage src="about-goal.webp" height={200}/>
                        <p className="mt-4 fs-3 fw-bold">愿景3</p>
                        <p className="fs-5">成为全球内容商家及服务商的「吃饭工具」</p>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}