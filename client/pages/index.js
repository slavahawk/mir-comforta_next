import $axios from '../http/axiosCreate'
import MainContainer from "../layouts/MainContainer";
import MainImage from '../public/main.jpg'
import styles from '../styles/Home.module.scss'
import Image from "next/image";

const myLoader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_DB_IMAGE}${src}`
}

export default function Home({products}) {
    return (
        <MainContainer>
            <section className={styles.main__box}>
                <div className={styles.main__text}>
                    <div className={styles.text}>
                        <h1>Главная страница</h1>
                        <h2>
                            Спите крепче, наслаждаясь приятным и качественным постельным бельем из экологически чистых
                            материалов.
                        </h2>
                        <button className={styles.button__catalog}>
                            <span>Смотреть каталог</span>
                        </button>
                    </div>
                </div>
                <div>
                    <Image src={MainImage} alt="Picture of the author" />
                </div>
            </section>
            <section className={styles.categories}>
                <div className={styles.categories__content}>
                    <div className={styles.categories__item}>
                        <p>Постельное белье</p>
                        <span>сатин, бязь, поплин-люкс</span>
                    </div>
                    <div className={styles.categories__item}>
                        <p>Подушки</p>
                        <span>кашемир, верблюжья шерсть, шерсть овцы</span>
                    </div>
                    <div className={styles.categories__item}>
                        <p>Одеяла</p>
                        <span>кашемир, верблюжья шерсть, шерсть овцы</span>
                    </div>
                </div>
            </section>
            <section>
                <div>{products.rows.map(product =>
                    <div key={product.id}>
                        <Image loader={myLoader} src={product.image} alt="Picture of the author" width={100} height={100} />
                        <span>{product.name}</span>
                        <span>{product.size}</span>
                    </div>
                )}
                </div>
            </section>

        </MainContainer>
    )
}

export async function getStaticProps(context) {
    const response = await $axios.get('http://localhost:5000/api/product')
    const products = response.data
    return {
        props: {products}
    }
}