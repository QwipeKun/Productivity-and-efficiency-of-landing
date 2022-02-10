import React from "react";
import s from "./CentralContent.module.css";
import picWoman from "./../../../image/designer/undraw_mobile_login_ikmv.svg"
import icon from "./../../../image/designer/Icon.svg"

let CentralContent = (props) => {
  return (
      <div>
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
            <div className={s.titleChildBlock}>
              <div className={s.imageIcon}><img src={icon} alt="" /></div>
              <div className={s.titleBlock}>Title Goes Here</div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
            <div className={s.titleChildBlock}>
              <div  className={s.imageIcon}><img src={icon} alt="" /></div>
              <div className={s.titleBlock}>Title Goes Here</div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
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
