import styles from '../styles/Header.module.scss'
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__links}>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/products'}>Каталог</Link>
                    <Link href={'/products'}>Доставка и оплата</Link>
                </div>

            </div>
        </header>
    )
}