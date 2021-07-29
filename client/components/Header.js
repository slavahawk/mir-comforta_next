import styles from '../styles/Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import basket from '../public/basket.svg'
import {useState} from "react";

export default function Header() {
    const count = useState(12)

    const handlerClickBasket = () => {
        alert('Клик по корзине')
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>

                <div className={styles.header__logo}>
                    МИР КОМФОРТА
                </div>

                <div className={styles.header__links}>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/products'}>Каталог</Link>
                    <Link href={'/products'}>Доставка и оплата</Link>
                </div>
                <div className={styles.header__basket}>
                    <a href="tel:+79082090500">+7 (908) 209 05 00</a>
                    <button onClick={handlerClickBasket} className={styles.button__basket}>
                        <Image src={basket}/>
                        <span>{count}</span>
                    </button>
                </div>

            </div>
        </header>
    )
}