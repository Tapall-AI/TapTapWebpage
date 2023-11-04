import { CButton, CCollapse, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNavItem, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from "@coreui/react";
import routes from "../shared/routes";

export default function NavBar() {

    return (
        <>
            <CNavbar expand="lg">
                <CContainer fluid>
                    <CNavbarBrand className="d-flex">
                        <img src="favicon.ico" className="d-inline-block align-top" />
                        <div>
                            <h4>TAP-TAP</h4>
                            <h5>塔普智能</h5>
                        </div>
                    </CNavbarBrand>
                    <CNavbarNav>
                        <CNavItem>
                            <CNavLink href={routes.home}>首页</CNavLink>
                        </CNavItem>
                        <CDropdown variant="nav-item" popper={false}>
                            <CDropdownToggle>产品</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href={routes.productShop}>Tap4Shop</CDropdownItem>
                                <CDropdownItem href={routes.productAds}>Tap4Ads</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <CNavItem>
                            <CNavLink href={routes.price}>价格</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href={routes.about}>关于我们</CNavLink>
                        </CNavItem>
                    </CNavbarNav>
                    <div>
                        <CButton className="me-2" variant="outline" color="info">
                            企业咨询
                        </CButton>
                        <CButton>
                            立即尝试
                        </CButton>
                    </div>
                </CContainer>
            </CNavbar>
        </>
    )
}