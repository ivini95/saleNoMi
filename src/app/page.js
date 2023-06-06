import styles from './page.module.scss'
import Header from '@/components/header/Header'
import MainContainer from '@/components/mainContainer/MainContainer'
import AboutContainer from '@/components/aboutContainer/AboutContainer'
import TypesFruitContainer from '@/components/typesFruitContainer/TypesFruitContainer'
import AvaliationsContainer from '@/components/avaliationsContainer/AvaliationsContainer'
import OfferContainer from '@/components/offerContainer/OfferContainer'
import FooterContainer from '@/components/footerContainer/FooterContainer'

export default function Home() {
  return (
    <>
      <main  className={styles.main}>
          <Header/>
          <MainContainer/>
      </main>
      <section id='about' className={styles.section}>
        <AboutContainer/>
      </section>
      <section id='types' className={styles.section}>
        <TypesFruitContainer/>
      </section>
      <section id='avaliation' className={styles.section}>
        <AvaliationsContainer/>
      </section>
      <section id='offer' className={styles.section}>
        <OfferContainer/>
      </section>
      <footer id='contact' className={styles.footer}>
        <FooterContainer/>
      </footer>
    </>
  )
}
