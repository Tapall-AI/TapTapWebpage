import { CButton, CCollapse, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNavItem, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from "@coreui/react";
import routes from "../shared/routes";

export default function NavBar() {

    return (
        <>
            <CNavbar className="sticky-top" expand="lg" style={{ backgroundColor: "#e3f2fd"}}>
                <CContainer fluid>
                    <CNavbarBrand className="d-flex">
                        <img src="favicon.ico" className="d-inline-block align-top" />
                        <div>
                            <p className="fs-5 fw-bold mb-0">TAP-ALL</p>
                            <p className="fs-5 fw-bold mb-0">塔普智能</p>
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