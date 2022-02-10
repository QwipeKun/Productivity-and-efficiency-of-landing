import React from "react";
import s from "./generalPage.module.css";
import designer from "./../../../image/designer/designer.svg";

const GeneralPage = () => {
  return (
    <div>
      <div className={s.titleDescriptionContainer}>
        <div className={s.titleDescriptionBlock}>
          <div className={s.title}>
            Introduce Your Product Quickly & Effectively
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className={s.buttons}>
            <div>
              <button className={s.buttonItemOne}> Purchase UI Kit </button>
            </div>
            <div>
              <button className={s.buttonItemTwo}> Learn More </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={s.designerImg}>
        <img src={designer} alt="designer" />
      </div>
    </div>
  );
};

export default GeneralPage;
