import { React, useState, useEffect } from "react";
import "../css/header.css";

import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Header = ({ turnOnSlideMenu }) => {
  const [isBoxHide, setboxHide] = useState(false);
  const [isHide, setHide] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const searchBoxUnhide = () => setboxHide((prev) => !prev);

  const screenWidthListener = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", screenWidthListener);
    console.log(screenWidth);

    screenWidth < 1024 ? setHide(true) : setHide(false);
    return () => {
      window.removeEventListener("resize", screenWidthListener);
    };
  }, [screenWidth]);

  return (
    <section className="header p-5 container">
      <section className="row">
        <section className="header__icon col-3 col-lg-5 d-flex align-items-center">
          <div className={isHide ? "unHide" : "hide"}>
            <i onClick={turnOnSlideMenu} className="-ap icon-th-menu"></i>
          </div>
          <div className={isHide ? "hide" : "unHide"}>
            <div className="menu__tablet  d-flex align-items-center justify-content-between gap-3">
              <div>Trang chủ</div>
              <div>Sản phẩm</div>
              <div>Giới thiệu</div>
              <div>Tin tức</div>
              <div>Liên hệ</div>
            </div>
          </div>
        </section>

        <section className="col-6 col-lg-2 d-flex align-items-center justify-content-center">
          <Logo />
        </section>

        <section className="d-flex col-3 col-lg-5 d-flex align-items-center justify-content-end gap-3">
          <div className="header__icon">
            <i
              onClick={searchBoxUnhide}
              className="-ap icon-magnifying-glass"
            ></i>
          </div>

          <div className={isHide ? "hide" : "unHide"}>
            <div className="header__icon">
              <i className="-ap icon-user5"></i>
            </div>
          </div>
          <div className="header__icon">
            <i className="-ap icon-shopping_cart"></i>
          </div>
        </section>
      </section>
      <section className={isBoxHide ? "unHide mt-4" : "hide"}>
        <SearchBox />
      </section>
    </section>
  );
};

export default Header;
