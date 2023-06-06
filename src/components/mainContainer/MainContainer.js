import styles from './mainContainer.module.scss'

import { Mystery_Quest } from 'next/font/google'

const mystery = Mystery_Quest({subsets : ['latin'], weight : ['400']})

function MainContainer(){
    return(
        <div className={styles.container}>
            <div>
                <h1 className={mystery.className}>AKUMA NO MI</h1>
                <h1 className={mystery.className}>AKUMA NO MI</h1>
            </div>
            
            <h3>Desperte seu potencial oculto: Adquira sua Akuma no Mi e domine o extraordinário!</h3>
            <button>ADQUIRA A SUA</button>
        </div>
    )
}

export default MainContainer