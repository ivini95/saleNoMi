import styles from './aboutContainer.module.scss'

import { Mystery_Quest } from 'next/font/google'

const mystery = Mystery_Quest({subsets : ['latin'], weight : ['400']})

function AboutContainer(){

    return(
        <div className={styles.aboutContainer}>
            <div className={styles.describeContainter}>
                <h4 className={mystery.className}>O QUE É?</h4>
                <p>
                    Akuma no Mi ou Fruta do Diabo são frutas especiais espalhadas pelo mundo, são conhecidas por conceder poderes sobre-humanos ou características especiais permanentes a quem consumir, porém tornam o usuário incapaz de nadar.
                </p>
            </div>
            <div className={styles.describeContainter}>
                <h4 className={mystery.className}>CARACTERISTICAS</h4>
                <p>
                    Cada Akuma no Mi possui uma aparência diferente, variando entre formatos e colorações, são mais de 100 tipos catalogados.
                    Elas possuem um sabor descrito como “ desagradável”, porém com apenas uma mordida você  vai adquirir poderes surpreendentes.
                </p>
            </div>
            <div className={styles.describeContainter}>
                <h4 className={mystery.className}>CRESCIMENTO</h4>
                <p>
                    O clico da Akuma no Mi não é semelhante a uma fruta normal. Quando um usuário de Akuma no Mi morre, o poder da fruta reencarna em uma nova fruta semelhante já existente no mundo de forma aleatória, ao invés de crescer de uma .
                </p>
            </div>
            <div className={styles.comments}>
                
                <div>
                    <p>
                        “Independentemente do poder que receber, tudo depende de como você o usa. As chances de você enfraquecer são muito baixas. Além disso, ser um martelo no mar não é um grande inconveniente.” 
                    </p>
                    <p>
                        Rob Lucci
                    </p>
                </div>
                <p>NÃO APOIAMOS QUALQUER FORMA DE PRODUÇÃO DE AKUMA NO MI ARTIFICIAIS. CONTRA INDICAMOS SUA COMPRA E USO.</p>
            </div> 
        </div>
    )

}

export default AboutContainer