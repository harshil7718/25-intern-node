import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
// import "./css/adminlte.css";
// import "./css/adminlte.min.css";

const UserSidebar = () => {
  return (
    <>
      <div className="app-wrapper">

        <aside
          className="app-sidebar bg-body-secondary shadow"
          data-bs-theme="dark"
        >
          <div className="sidebar-brand">
            <a className="brand-link" href="/dist/pages/">
              <img
                src="../../dist/assets/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image opacity-75 shadow"
              />
              <span className="brand-text fw-light">AdminLTE 4</span>
            </a>
          </div>

          <div className="sidebar-wrapper" data-overlayscrollbars="host">
            <div className="os-size-observer">
              <div className="os-size-observer-listener" />
            </div>

            <div
              className=""
              data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
              tabIndex={-1}
              style={{
                marginRight: "-16px",
                marginBottom: "-16px",
                marginLeft: 0,
                top: "-8px",
                right: "auto",
                left: "-8px",
                width: "calc(100% + 16px)",
                padding: 8,
              }}
            >
              <nav className="mt-2">
                <ul
                  className="nav sidebar-menu flex-column"
                  data-lte-toggle="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item menu-open">
                    <Link to="/addproduct" className="nav-link active">
                      <i className="nav-icon bi bi-speedometer" />
                      <p>
                        Add Product
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/myproducts" className="nav-link active" >
                          <i className="nav-icon bi bi-speedometer" />
                          <p>View Ny Products</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dist/pages/index2">
                          <i className="nav-icon bi bi-circle" />
                          <p>Dashboard v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dist/pages/index3">
                          <i className="nav-icon bi bi-circle" />
                          <p>Dashboard v3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dist/pages/generate/theme">
                      <i className="nav-icon bi bi-palette" />
                      <p>Theme Generate</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-box-seam-fill" />
                      <p>
                        Widgets
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/widgets/small-box"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Small Box</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/widgets/info-box"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>info Box</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/widgets/cards"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Cards</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-clipboard-fill" />
                      <p>
                        Layout Options
                        <span className="nav-badge badge text-bg-secondary me-3">
                          6
                        </span>
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/unfixed-sidebar"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Default Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/fixed-sidebar"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Fixed Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/fixed-header"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Fixed Header</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/fixed-footer"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Fixed Footer</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/fixed-complete"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Fixed Complete</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/layout-custom-area"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>
                            Layout <small>+ Custom Area </small>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/sidebar-mini"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Sidebar Mini</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/collapsed-sidebar"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>
                            Sidebar Mini <small>+ Collapsed</small>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/logo-switch"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>
                            Sidebar Mini <small>+ Logo Switch</small>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/layout/layout-rtl"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Layout RTL</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-tree-fill" />
                      <p>
                        UI Elements
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a className="nav-link" href="/dist/pages/ui/general">
                          <i className="nav-icon bi bi-circle" />
                          <p>General</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dist/pages/ui/icons">
                          <i className="nav-icon bi bi-circle" />
                          <p>Icons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dist/pages/ui/timeline">
                          <i className="nav-icon bi bi-circle" />
                          <p>Timeline</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-pencil-square" />
                      <p>
                        Forms
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/forms/general"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>General Elements</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-table" />
                      <p>
                        Tables
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/tables/simple"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Simple Tables</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">EXAMPLES</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-box-arrow-in-right" />
                      <p>
                        Auth
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="nav-icon bi bi-box-arrow-in-right" />
                          <p>
                            Version 1
                            <i className="nav-arrow bi bi-chevron-right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="/dist/pages/examples/login"
                            >
                              <i className="nav-icon bi bi-circle" />
                              <p>Login</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="/dist/pages/examples/register"
                            >
                              <i className="nav-icon bi bi-circle" />
                              <p>Register</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="nav-icon bi bi-box-arrow-in-right" />
                          <p>
                            Version 2
                            <i className="nav-arrow bi bi-chevron-right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="/dist/pages/examples/login-v2"
                            >
                              <i className="nav-icon bi bi-circle" />
                              <p>Login</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="/dist/pages/examples/register-v2"
                            >
                              <i className="nav-icon bi bi-circle" />
                              <p>Register</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/examples/lockscreen"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Lockscreen</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">DOCUMENTATIONS</li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/dist/pages/docs/introduction"
                    >
                      <i className="nav-icon bi bi-download" />
                      <p>Installation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dist/pages/docs/layout">
                      <i className="nav-icon bi bi-grip-horizontal" />
                      <p>Layout</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dist/pages/docs/color-mode">
                      <i className="nav-icon bi bi-star-half" />
                      <p>Color Mode</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-ui-checks-grid" />
                      <p>
                        Components
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/docs/components/main-header"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Main Header</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/docs/components/main-sidebar"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Main Sidebar</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-filetype-js" />
                      <p>
                        Javascript
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/dist/pages/docs/javascript/treeview"
                        >
                          <i className="nav-icon bi bi-circle" />
                          <p>Treeview</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/dist/pages/docs/browser-support"
                    >
                      <i className="nav-icon bi bi-browser-edge" />
                      <p>Browser Support</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/dist/pages/docs/how-to-contribute"
                    >
                      <i className="nav-icon bi bi-hand-thumbs-up-fill" />
                      <p>How To Contribute</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dist/pages/docs/faq">
                      <i className="nav-icon bi bi-question-circle-fill" />
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dist/pages/docs/license">
                      <i className="nav-icon bi bi-patch-check-fill" />
                      <p>License</p>
                    </a>
                  </li>
                  <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle-fill" />
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle-fill" />
                      <p>
                        Level 1<i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>Level 2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>
                            Level 2
                            <i className="nav-arrow bi bi-chevron-right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="nav-icon bi bi-record-circle-fill" />
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="nav-icon bi bi-record-circle-fill" />
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="nav-icon bi bi-record-circle-fill" />
                              <p>Level 3</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>Level 2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle-fill" />
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-header">LABELS</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle text-danger" />
                      <p className="text">Important</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle text-warning" />
                      <p>Warning</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-circle text-info" />
                      <p>Informational</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <div
          className="os-scrollbar os-scrollbar-horizontal os-theme-light os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-track-interactive os-scrollbar-cornerless os-scrollbar-unusable os-scrollbar-auto-hide-hidden"
          style="--os-scroll-percent: 0; --os-viewport-percent: 1; --os-scroll-direction: 0;"
        >
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle"></div>
          </div>
        </div> */}
            {/* <div
          className="os-scrollbar os-scrollbar-vertical os-theme-light os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-track-interactive os-scrollbar-visible os-scrollbar-cornerless os-scrollbar-auto-hide-hidden"
          style="--os-scroll-percent: 0; --os-viewport-percent: 0.7148; --os-scroll-direction: 0;"
        >
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle"></div>
          </div>
        </div> */}
          </div>
        </aside>
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserSidebar;
