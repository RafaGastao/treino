import s from "./styleMain.module.scss"
import mortalkombat from "../../imagens/MortalKombat.png"
import mario from "../../imagens/Mario.png"
import horizon from "../../imagens/Horizon.png"
import motorfest from "../../imagens/Motorfest.png"
import monitor from "../../imagens/Monitor.png"
import placadeVideo from "../../imagens/PlacadeVideo.png"
import placamae from "../../imagens/Placamae.png"
import fone from "../../imagens/Fone.png"



export default function Main(){
    const jogos = [
        {
            imagem:  mortalkombat,
            preço: '212,99',
            alt: 'Mortal Kombat 11'         
        },
        {
            imagem: mario,
            preço: '299,00',
            alt:'Mario e Luigi'
        },
        {
            imagem: horizon,
            preço: '499,90',
            alt:'Horizon'
        },
        {
            imagem: motorfest,
            preço: '249,50',
            alt: 'Motorfest'
        }
    ]
    const peças = [
        {
            imagem:monitor,
            preço: '2.999,99',
            alt: 'Monitor'
        },
        {
            imagem:placadeVideo,
            preço: '1.639,99',
            alt: 'Placa de Video'
        },
        {
            imagem: placamae,
            preço: '639,99',
            alt: 'Placa Mãe'
        },
        {
            imagem: fone,
            preço: '669,99',
            alt: 'Fone'
        }
    ]
    
    return(
        <main className={s.main}>
            <section className={s.sect}>
            <h1>Jogos para Consoles</h1>
            <a href="">Ver mais</a>
            </section>
        
            <section className={s.section}>
            {
                jogos.map((item)=>(
                    
                    <article className={s.article}>   
                        <img src={item.imagem} alt={item.alt} />
                        <h3>Preço:  {item.preço}</h3>
                    </article>
                ))
            }
            </section>

            <section className={s.sect}>
                <h1>Peças e Periféricos de Pc</h1>
                <a href="">Ver mais</a>
            </section>
            
            <section className={s.secti}>
                {
                    peças.map((item)=>(
                        <article className={s.artic}>
                            <img src={item.imagem} alt={item.alt} />
                            <h3>Preço:  {item.preço}</h3>
                        </article>
                    ))
                }
            </section>
        </main>
    )
}