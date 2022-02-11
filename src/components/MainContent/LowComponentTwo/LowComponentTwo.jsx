import React from "react";
import s from './LowComponent.module.css'
import imageGirl from './../../../image/designer/socialGirl.svg'

let LowComponentTwo = (props) => {
    return(
        <div className={s.lowContentContiner}>
            <div className={s.textContainer}>
                <div className={s.titleBlock}>
                    Light, Fast & Powerful
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
            </div>
            <div className={s.imageIcon}>
                <img src={imageGirl} alt="imageGirl" />
            </div>
        </div>
    )
}

export default LowComponentTwo