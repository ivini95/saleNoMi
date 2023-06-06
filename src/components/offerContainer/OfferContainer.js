import Image from "next/image"

import styles from './offerContainer.module.scss'

import { Mystery_Quest } from 'next/font/google'

const mystery = Mystery_Quest({subsets : ['latin'], weight : ['400']})

function OfferContainer(){

    return(
        <div className={styles.offerContainer}>
            <div>
                <p>
                    03 : 02 : 54 -  Oferta por tempo limitado - Na compra de uma Akuma no mi Zoan receba um pacote com 6 Rumble Balls.
                </p>
            </div>
            <div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/gomugomu.svg' alt="gomugomu no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>GOMU GOMU NO MI</h5>
                    <p><span>Tipo</span> : Paramecia</p>
                    <p>Transforma o corpo do usuário em borracha.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/hanahana.svg' alt="hanahana no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>HANA HANA NO MI</h5>
                    <p><span>Tipo</span> : Paramecia</p>
                    <p>Permite replicar e brotar partes de seu corpo a partir de qualquer superfície.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/meramera.svg' alt="meramera no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>MERA MERA NO MI</h5>
                    <p><span>Tipo</span> : Logia</p>
                    <p>Permite criar, controlar e se transformar em chamas.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/sarasara.svg' alt="sarasara no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>SARA SARA NO MI</h5>
                    <p><span>Tipo</span> : Zoan</p>
                    <p>Permite se tornar um hibrido de Axolote.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/itoito.svg' alt="itoito no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>ITO ITO NO MI</h5>
                    <p><span>Tipo</span> : Paramecia</p>
                    <p>Permite criar e manipular fios invisíveis a olho nu.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/opeope.svg' alt="opeope no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>OPE OPE NO MI</h5>
                    <p><span>Tipo</span> : Paramecia</p>
                    <p>Permite criar um sala onde se tem total controle sobre o posicionamento e orientação dos objetos e corpos dentro dela.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/barabara.svg' alt="barabara no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>BARA BARA NO MI</h5>
                    <p><span>Tipo</span> : Paramecia</p>
                    <p>Permite dividir seu próprio corpo e controla-los, além de ficar imune a ataques cortantes.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/yomiyomi.svg' alt="yomiyomi no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>YOMI YOMI NO MI</h5>
                    <p><span>Tipo</span> : Paramecia</p>
                    <p>Permite voltar a vida depois de morrer.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/hitohito.svg' alt="hitohito no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>HITO HITO NO MI</h5>
                    <p><span>Tipo</span> : Zoan</p>
                    <p>Permite se tornar um hibrido de humano.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
                <div>
                    <Image src='/backGroundMi.svg' alt="background" width={185} height={190}/>
                    <Image src='/ushiushi.svg' alt="ushiushi no mi" width={156} height={156}/>
                    <h5 className={mystery.className}>USHI USHI NO MI</h5>
                    <p><span>Tipo</span> : Zoan</p>
                    <p>Permite se tornar um hibrido de girafa.</p>
                    <div></div>
                    <div><Image src='/bells.svg' alt="bells cifrão" width={22} height={22}/><p>3.000,000,00</p></div>
                    <button>COMPRAR</button>
                </div>
            </div>
        
        </div>

    )

}

export default OfferContainer