import styles from './page.module.css'
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
      <main className={styles.main}>
          <Header/>
          <MainContainer/>
      </main>
      <section>
        <AboutContainer/>
      </section>
      <section>
        <TypesFruitContainer/>
      </section>
      <section>
        <AvaliationsContainer/>
      </section>
      <section>
        <OfferContainer/>
      </section>
      <footer>
        <FooterContainer/>
      </footer>
    </>
  )
}
