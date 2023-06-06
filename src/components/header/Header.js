import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';

function Header(){

    return(
        <header className={styles.header}>
            <Image 
            src="/iconSale.svg" 
            width={88}
            height={88}
            alt="Sale no Mi Icon" className={styles.iconSale}/>
            <nav>
           
                <Link href='#header'>Home</Link>
                <Link href='#about'>Sobre</Link>
                <Link href='#types'>Tipos</Link>
                <Link href='#avaliation'>Depoimentos</Link>
                <Link href='#offer'>Ofertas</Link>
                <Link href='#contact'>Contato</Link>
          
            </nav>
        </header>
    )

}

export default Header