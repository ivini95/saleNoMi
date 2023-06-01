import Image from "next/image"
import Link from "next/link"

function FooterContainer(){

    return (

        <div>
            <div>
                <form action="">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="" placeholder="e-mail"/>
                </form>
                <button>Inscreva-se</button>
            </div>
            <div>
                <div>
                    <Image src='/instaIcon.svg' width={24} height={24}/>
                    <Image src='/faceIcon.svg' width={24} height={24}/>
                    <Image src='/twitterIcon.svg' width={24} height={24}/>
                </div>
                <Image src='/frete.svg' width={140} height={106}/>
            </div>
            <div>
                <div>
                    <Image src='/safeIcon.svg' width={20} height={24}/>
                    <p>Garantimos que todas as transações são 100% seguras</p>
                </div>
                <Link href='home'>Voltar ao topo</Link>
                <div>
                    <Image src='/card1.svg' width={80} height={48}/>
                    <Image src='/card2.svg' width={80} height={48}/>
                    <Image src='/card3.svg' width={80} height={48}/>
                    <Image src='/card4.svg' width={80} height={48}/>
                </div>
            </div>
            <Image src='/saleNoMiYellow.svg' width={686} height={155}/>
        </div>

    )

}

export default FooterContainer