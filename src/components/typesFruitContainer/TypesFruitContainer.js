import Image from "next/image"

import styles from './typesFruitContainer.module.scss'

import { Mystery_Quest } from 'next/font/google'

const mystery = Mystery_Quest({subsets : ['latin'], weight : ['400']})

function TypesFruitContainer(){

    return (

        <div className={styles.typesFruitContainer}>
            <div>
                <h4 className={mystery.className}>TIPOS</h4>
                <p>
                    As Akuma no Mi são divididas em três tipos :<span>Paramecia</span> , <span>Logia</span>  e <span>Zoan</span> .
                </p>
                <div>
                    <p>
                        “Escute bem, garoto. As habilidades de Akuma no Mi possuem um outro estágio, chamado de Despertar! Muito raramente, uma habilidade desperta e começa a afetar outras coisas além do próprio corpo do usuário!”
                    </p>
                    <p>
                        Donquixote Doflamingo
                    </p>
                </div>
            </div>
            <div>
                <Image src="/parameciaIcon.svg" width={144} height={144} alt="paramecia fruit"/>
                <p><span>Paramecia</span> - O tipo mais comum entre os 3,  esse tipo de fruta pode ter os seguintes efeitos:<br/>
                <br/>
                    Alterar o corpo do usuário, ex : corpo de borracha ou lama.<br/>
                    <br/>
                    Permitir que o usuário modifique pessoas, objetos e ambientes, ex : trocar objetos de lugar, dividir o próprio corpo.<br/>
                    <br/>
                    Gerar ou manipular substancias : Fios, bolhas de sabão.
                </p>
            </div>
            <div>
                <Image src="/logiaIcon.svg" width={144} height={144} alt="logia fruit"/>
                <p><span>Logia</span> - O tipo tido como o mais raro e poderoso,  esse tipo de fruta pode ter os seguintes efeitos :<br/>
                <br/>
                    Criar, Controlar e Transformar seu corpo em um elemento natural, ex : Fogo, fumaça, luz.<br/>
                    <br/>
                    Intangibilidade<br/>
                    <br/>
                    habilidade relacionadas ao elemento, ex : usuário da fruta da fumaça é capaz de voar.<br/>

                </p>
            </div>
            <div>
                <Image src="/zoanIcon.svg" width={144} height={144} alt="zoan fruit"/>
                <p><span>Zoan</span> - Esse tipo de fruta concede ao usuário a habilidade de se tornar um animal, ou uma forma hibrida entre animal e humano, esse tipo de fruta possui subclasses como :<br/>
                <br/>
                <span>Zoan Ancestral</span> - Pode se transformar em animais extintos, como dinossauros.<br/>
                    <br/>
                    <span>Zoan Mítica</span> - Pode se transformar em criaturas míticas como um dragão ou uma fênix, esse tipo de fruta pode conceder habilidades extras especiais, ex : as chamas da fênix tem poder de cura.<br/>

                </p>
            </div>
        </div>

    )

}

export default TypesFruitContainer