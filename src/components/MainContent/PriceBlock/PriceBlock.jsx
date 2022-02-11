import s from "./PriceBlock.module.css";

let PriceBlock = () => {
  return (
    <div>
      <div className={s.priceContainer}>
        <div className={s.textContainer}>
          <div className={s.titleText}>A Price To Suit Everyone</div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
        </div>
        <div>
          <div className={s.priceBlock}>$40</div>
          <div className={s.diskPriceBlock}> UI Design Kit </div>
        </div>
        <div>
          <div className={s.diskButton}>See, One price. Simple.</div>
          <button className={s.buttonItem}> Purchase Now </button>
        </div>
      </div>
      <div className={s.devBlock}>
        Developed by Luchinsky Ilya
      </div>
    </div>
  );
};

export default PriceBlock;
