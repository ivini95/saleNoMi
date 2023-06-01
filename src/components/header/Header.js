import Image from 'next/image';

function Header(){

    return(
        <header>
            <Image 
            src="/iconSale.svg" 
            width={88}
            height={88}
            alt="Sale no Mi Icon"/>
            <div>
                <h2>Home</h2>
                <h2>Sobre</h2>
                <h2>Depoimentos</h2>
                <h2>Ofertas</h2>
                <h2>Contato</h2>
            </div>
        </header>
    )

}

export default Header