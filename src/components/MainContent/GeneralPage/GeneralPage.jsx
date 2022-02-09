import React from "react";
import s from "./generalPage.module.css";
import designer from "./../../../image/designer/designer.svg";

const GeneralPage = () => {
  return (
    <div>
      <div className={s.titleDescriptionContainer}>
        <div className={s.titleDescriptionBlock}>
          <div className={s.title}>Introduce Your Product Quickly & Effectively</div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className={s.designerImg}>
        <img src={designer} alt="designer" />
      </div>
      <div className={s.titleDescriptionContainer}>
        <div className={s.titleDescriptionBlock}>
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className={s.titleDescriptionContainer}>
        <div className={s.titleDescriptionBlock}>
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
