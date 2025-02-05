import amd54600 from "../../imagens/AmdRyzen54600.png"
import amd97950 from "../../imagens/Amd97950.png"
import memoria8gb from "../../imagens/Memoria8gb,3600mhz.png"
import placa4080 from "../../imagens/Placa4080.png"
import placamd from "../../imagens/Placaamd.png"
import placamae from "../../imagens/Placamae1.png"
import placaVideo from "../../imagens/PlacaVideo1650.png"
import placaVideoS from "../../imagens/PlacaVideo1650s.png"



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

    return(
        <main>
            <section>
            <h1>Peças </h1>
            </section>
            <section>
                {
                    peças.map((item)=>(
                        <article>
                            <img src={item.imagem} alt={item.alt} />
                            <h3>Preço: {item.preço}</h3>
                        </article>
                    ))
                }
            </section>

            <section>
                <h1>Periféricos de computador</h1>
            </section>
        </main>
    )
}