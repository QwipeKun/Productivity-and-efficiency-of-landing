import React from "react";
import s from "./CentralContent.module.css";
import picWoman from "./../../../image/designer/undraw_mobile_login_ikmv.svg"

let CentralContent = (props) => {
  return (
    <div className={s.centralContentContainer}>
      <div>
        <div className={s.textBlockContainer}>
          <div className={s.mainTextBlock}>
            <div className={s.textTitle}>Light, Fast & Powerful</div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className={s.blocksUnderTheText}>
            <div>
              <div><img src="" alt="" /></div>
              <div>Title Goes Here</div>
              <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </div>
            </div>
            <div>
              <div><img src="" alt="" /></div>
              <div>Title Goes Here</div>
              <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.picWomanImage}>
        <img src={picWoman} alt="wooman" />
      </div>
    </div>
  );
};

export default CentralContent;
