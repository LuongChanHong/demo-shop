import { React, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlidingMenu from "./SlidingMenu";

import image from "../imgs/30cc05a4e78749d91096.jpg";

import "../css/home.css";

const Home = () => {
  const [quantity, setQuantity] = useState(10);
  const [isSlideOn, setSlideOn] = useState(false);

  const turnOnSlideMenu = () => setSlideOn((prev) => !prev);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    if (quantity >= 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <section className="position-relative">
      <Header turnOnSlideMenu={turnOnSlideMenu} />
      <SlidingMenu isSlideOn={isSlideOn} turnOnSlideMenu={turnOnSlideMenu} />
      <section
        className={
          isSlideOn
            ? "slidingMenu__background position-absolute w-100 h-100 unHide"
            : "hide"
        }
      ></section>
      <section className=" product__container py-1">
        <section className="product__wrapper container">
          <section className="product__section">
            <div className="row">
              <div className="product__img col-12 d-flex col-md-6 justify-content-center">
                <img src={image} />
              </div>
              <section className="col-12 col-md-6 product__detail">
                <div className="py-2">
                  <h3>Muối Alpen JodSalz 125g</h3>
                </div>
                <div>
                  <p className="m-0">Thương hiệu: Liên bang Đức</p>
                  <p className="m-0">Tình Trạng: Còn hàng</p>
                </div>
                <div className="product__price d-flex flex-row justify-content-center, align-items-center gap-2 my-">
                  <span>100.000 ₫</span>
                  <span className="fs-6 text-secondary text-decoration-line-through">
                    120.000 ₫
                  </span>
                </div>
                <div className="d-flex justify-content-center, align-items-center gap-2 my-3">
                  <span>Số lượng: </span>
                  <div className="product__quantity d-flex justify-content-center, align-items-center gap-2 fs-3">
                    <i onClick={reduceQuantity} class="-ap icon-minus3"></i>
                    <div>
                      <span>{quantity}</span>
                    </div>
                    <i onClick={addQuantity} class="-ap icon-plus3"></i>
                  </div>
                </div>
                <div className="product__btn d-flex gap-4">
                  <button>Thêm vào giỏ hàng</button>
                  <button>Thanh toán</button>
                </div>
              </section>
            </div>
          </section>
          <section className="product__section">
            <h3>Mô tả sản phẩm</h3>
            <div>
              <p className="m-0">
                <span className="txt__bold">Thương hiệu: </span>
                <span>Liên bang Đức</span>
              </p>
              <ul className="txt__bold p-0">Thành phần: </ul>
              <li>
                <span>Muối iot: </span>
                <span>
                  sản sinh ra hormone tuyến giáp, điều hòa thân nhiệt cơ thể,ổn
                  định hệ thần kinh trung ương, tốt cho tim mạch, thận, hệ tiêu
                  hóa
                </span>
              </li>
              <li>
                <span>Acid folic: </span>
                <span>
                  (vitamin B9 - thuộc vitamin nhóm B) là dưỡng chất cho qphát
                  triển và phân chia tế bào, hình thành của tế bào máu.
                </span>
              </li>
              <li>
                <span>Fluor: </span>
                <span>
                  cải thiện sức khỏe răng miệng,tạo ngà răng và men răng, đóng
                  vai trò quan trọng trong quá trình tạo khung xương hữu cơ và
                  khoáng hóa tạo thành mô xương
                </span>
              </li>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
