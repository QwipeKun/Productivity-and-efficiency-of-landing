import s from "./Header.module.css"

let Header = () => { 
    return(
        <div className={s.headerMainBlock}>
            <div className={s.navigationBlock}>
                <div className={s.item}>
                    Home
                </div>
                <div className={s.item}>
                    About
                </div>
                <div className={s.item}>
                    Contact
                </div>
            </div>
            <div className={s.titleName}>
                Landie
            </div>
            <button className={s.buttonPurchase}> Buy Now </button>

        </div>
    )
}

export default Header