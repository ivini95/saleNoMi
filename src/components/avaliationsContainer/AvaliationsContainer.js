import Image from "next/image"

function AvaliationsContainer(){

    return (

        <div>
            <div>
                <p>
                &quot;Algumas Akuma no Mi são consideradas lendárias, com poderes que podem abalar o mundo. No entanto, essas frutas são extremamente raras e valiosas.&quot;
                </p>
                <Image src="/marcoIcon.svg" alt="marco image" width={64} height={64} />
                <p>Marco, O Fênix</p>
                <Image src="/star.svg" alt="stars image" width={152} height={24}/>
            </div>
            <div>
                <p>
                &quot;Nem todas as Akuma no Mi são iguais. Algumas oferecem poderes incríveis, enquanto outras podem ser menos impressionantes. A chave está em encontrar a fruta que se encaixa perfeitamente em suas habilidades e objetivos.&quot;
                </p>
                <Image src="/tralfaIcon.svg" alt="tralfa image" width={64} height={64} />
                <p>Trafalgar D. Water Law</p>
                <Image src="/star.svg" alt="stars image" width={152} height={24}/>
            </div>
            <div>
                <p>
                &quot;Avaliar uma Akuma no Mi é como desvendar um mistério. É preciso entender os segredos por trás dos poderes que ela concede e as suas limitações.&quot;
                </p>
                <Image src="/rayIcon.svg" alt="ray image" width={64} height={64}  />
                <p>Silvers Rayleigh</p>
                <Image src="/star.svg" alt="stars image" width={152} height={24}/>
            </div>
            <Image src="/saleNoMiBlue.svg" alt="sale no mi tag image" width={686} height={155}/>
            <Image src="/saleNoMiTag.svg" alt="sale no mi tag image" width={390} height={48}/>
        </div>

    )

}

export default AvaliationsContainer