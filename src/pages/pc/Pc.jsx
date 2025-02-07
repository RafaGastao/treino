import amd54600 from "../../imagens/AmdRyzen54600.png"
import amd97950 from "../../imagens/Amd97950.png"
import memoria8gb from "../../imagens/Memoria8gb,3600mhz.png"
import placa4080 from "../../imagens/Placa4080.png"
import placamd from "../../imagens/Placaamd.png"
import placamae from "../../imagens/Placamae1.png"
import placaVideo from "../../imagens/PlacaVideo1650.png"
import placaVideoS from "../../imagens/PlacaVideo1650s.png"
import foneRazer from "../../imagens/FoneRazer.png"
import foneRazer2 from "../../imagens/FoneRazer2.png"
import mouseLogitech from "../../imagens/MouseLogitech.png"
import mousePad from "../../imagens/MousePad.png"
import mousePadLogitech from "../../imagens/MousePadLogitech.png"
import mouseRazer from "../../imagens/MouseRazer.png"
import mouseRedDragon from "../../imagens/MouseRedDragon.png"
import tecladoRazer from "../../imagens/TecladoRazer.png"
import s from './stylePc.module.scss'


export default function Jogos(){
    const peças = [
        {
            imagem: amd54600,
            preço: '2500,00',
            alt: 'Processador Amd Ryzen 5 4600g'
        },
        {
            imagem: amd97950,
            preço: '3500,00',
            alt: 'Procesador Amd Ryzen 9 7950'
        },
        {
            imagem: memoria8gb,
            preço: '240,00',
            alt: 'Memoria HyperX 8gb, 3600mhz '
        },
        {
            imagem: placa4080,
            preço: '4200,00',
            alt: 'Placa de Video Rtx 4080'
        },
        {
            imagem: placamd,
            preço: '2500,00',
            alt: 'Placa Amd Radeon rx 7600'
        },
        {
            imagem: placamae,
            preço: '560,00',
            alt: 'Placa mãe'
        },
        {
            imagem: placaVideo,
            preço: '1200,00',
            alt: 'Placa de Video TUF Gamin 1650'
        },
        {
            imagem: placaVideoS,
            preço: '1450,00',
            alt: 'Placa de Video Geforce Gtx 1650 super'
        }
    ]
    
    const perifericos = [
        {
            imagem: foneRazer,
            preço: '350,00',
            alt: 'Fone razer com fio'
        },
        {
            imagem: foneRazer2,
            preço: '350,00',
            alt: 'Fone Razer com fio e orelha'
        },
        {
            imagem: mouseLogitech,
            preço: '450,00',
            alt: 'Mouse Logitech com fio'
        },
        {
            imagem: mouseRazer,
            preço: '350,00',
            alt: 'Mouse Razer com fio'
        },
        {
            imagem: mouseRedDragon,
            preço: '250,00',
            alt: 'Mouse RedDragon com fio'
        },
        {
            imagem: mousePad,
            preço: '350,00',
            alt: 'Mouse pad com led'
        },
        {
            imagem: mousePadLogitech,
            preço: '375,00',
            alt: 'Mouse pad Logitech'
        },
        {
            imagem: tecladoRazer,
            preço: '325,00',
            alt: 'Teclado Razer mecânico com fio'
        },
        {
            imagem: tecladoRedragon,
            preço: '225,00',
            alt: 'Teclado redDragon mecânico com fio'
        }
    ]

    return(
        <main className={s.main}>
            <section className={s.pecas}>
            <h1>Peças </h1>
            </section>
            
            <section className={s.section}>
                {
                    peças.map((item)=>(
                        <article>
                            <img src={item.imagem} alt={item.alt} />
                            <h3>Preço: {item.preço}</h3>
                        </article>
                    ))
                }
            </section>

            <section className={s.perife}>
                <h1>Periféricos de computador</h1>
            </section>

            <section className={s.sect}>
                {   
                    perifericos.map((item)=>(
                        <article>
                            <img src={item.imagem} alt={item.alt}/>
                            <h3>Preço: {item.preço}</h3>
                        </article>
                    ))
                }
            </section>
        </main>
    )
}