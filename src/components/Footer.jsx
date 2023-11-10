import { CFooter, CImage } from "@coreui/react";
import "./Footer.css";
import CIcon from "@coreui/icons-react";
import { cibGithub, cibSinaWeibo, cibTwitter } from "@coreui/icons";
import routes from "../shared/routes";

export default function Footer() {

    return (
        <CFooter className="footer-div mt-5">
            <div className="d-flex">
                <CImage src="favicon.ico" />
                <div>
                    <h4>TAP-ALL</h4>
                    <h5>塔普智能</h5>
                </div>
            </div>
            <div>
                <p className="fs-4">产品</p>
                <a href={routes.productShop}>
                    <p className="fs-6">Tap4Shop</p>
                </a>
                <a href={routes.productAds}>
                    <p className="fs-6">Tap4Ads</p>
                </a>
            </div>
            <div>
                <p className="fs-4">企业</p>
                <a href={routes.about}>
                    <p className="fs-6">关于我们</p>
                </a>
            </div>
            <div>
                <p className="fs-4">社交媒体</p>
                <div className="icon-div">
                    <CIcon icon={cibGithub} />
                    <CIcon icon={cibTwitter} />
                    <CIcon icon={cibSinaWeibo} />
                </div>
            </div>
        </CFooter>
    )
}