import React from "react";
import "../css/footer.css";

import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="footer__container ">
      <section className="container py-5">
        <section className="row">
          <section className="py-2 col-12 col-md-3 ">
            <Logo />
            <div className="mt-2">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus reprehenderit id debitis esse! Ducimus obcaecati
                minima, aliquid nostrum repudiandae
              </span>
            </div>
          </section>
          <section className="py-2 col-12 col-md-3 ">
            <h3>Chính sách</h3>
            <div>
              <h6>Đổi trả</h6>
              <h6>Giao hàng</h6>
              <h6>Thanh toán</h6>
              <h6>Bảo mật</h6>
            </div>
          </section>
          <section className="py-2 col-12 col-md-3 ">
            <h3>Về chúng tôi</h3>
            <div>
              <h6>Trang chủ</h6>
              <h6>Sản phẩm</h6>
              <h6>Giới thiệu</h6>
              <h6>Tin tức</h6>
            </div>
          </section>
          <section className="py-2 col-12 col-md-3 ">
            <div>
              <h3>Liên hệ hotline</h3>
              <h3>0901234567</h3>
            </div>
            <div className="py-4">
              <h3>Hoặc theo dõi</h3>
              <section className="d-flex gap-3 fs-1">
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
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
