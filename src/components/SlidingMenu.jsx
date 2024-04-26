import React from "react";
import "../css/slidingMenu.css";

const SlidingMenu = ({ isSlideOn, turnOnSlideMenu }) => {
  return (
    <section
      className={
        isSlideOn
          ? "slidingMenu__container position-absolute unHide__block "
          : "hide"
      }
    >
      <section className="slidingMenu__menu">
        <section className="border-1 border-bottom border-secondary ">
          <div className="d-flex align-items-center justify-content-between p-3">
            <h3>Menu</h3>
            <i
              onClick={turnOnSlideMenu}
              className="fw-bold fs-1 -ap icon-close"
            ></i>
          </div>
        </section>
        <section className="menu__tablet">
          <div className="menu__item">Trang chủ</div>
          <div className="menu__item">Sản phẩm</div>
          <div className="menu__item">Giới thiệu</div>
          <div className="menu__item">Tin tức</div>
          <div className="menu__item">Liên hệ</div>
          <div className="menu__item">Tài khoản</div>
        </section>
        <section className="d-flex ps-3 pt-4 gap-3 fs-1">
          <div>
            <a className="icon__link" href="https://www.facebook.com/">
              <i className="-ap icon-facebook2"></i>
            </a>
          </div>
          <div>
            <a className="icon__link" href="https://www.youtube.com/">
              <i className="-ap icon-youtube"></i>
            </a>
          </div>
          <div>
            <a className="icon__link" href="https://www.instagram.com/">
              <i className="-ap icon-instagram"></i>
            </a>
          </div>
          <div>
            <a className="icon__link" href="https://www.pinterest.com/">
              <i className="-ap icon-pinterest"></i>
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default SlidingMenu;
