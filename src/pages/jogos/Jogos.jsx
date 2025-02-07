import eldenRing from "../../imagens/EldenRing.png"
import fifa25 from "../../imagens/Fifa25.png"
import godofWar from "../../imagens/Godofwar.png"
import re2 from "../../imagens/Re2.png"
import re4 from "../../imagens/Re4.png"
import re7 from "../../imagens/Re7.png"
import re8 from "../../imagens/Re8.png"
import watchDogs from "../../imagens/WatchDogs.png"
import callofDuty from "../../imagens/CallofDuty.png"
import forzaHorizon from "../../imagens/ForzaHorizon.png"
import gta from "../../imagens/Gta.png"
import gtaSa from "../../imagens/GtaSa.png"
import killZone from "../../imagens/KillZone.png"
import mario1 from "../../imagens/Mario1.png"
import supersmashBross from "../../imagens/SupersmashBross.png"
import superBomberman from "../../imagens/SuperBomberman.png"




export default function Jogos(){
    const pc = [
        {
            imagem: eldenRing,
            preço: '200,00',
            alt: 'Elden Ring jogo souls like'
        },
        {
            imagem: fifa25,
            preço: '300,00',
            alt: 'Jogo de futebol fifa 25'
        },
        {
            imagem: godofWar,
            preço: '150,00',
            alt: 'Jogo God of War ragnarok'
        },
        {
            imagem: re2,
            preço: ' 150,00',
            alt: 'Resident evil 2 remake'
        },
        {
            imagem: re4,
            preço: '170,00',
            alt: 'Resident evil 4 remake'
        },
        {
            imagem: re7,
            preço: '80,00',
            alt: 'Resident evil 7 biohazard'
        },
        {
            imagem: re8,
            preço: '80,00',
            alt: 'Resident evil Village'
        },
        {
            imagem: watchDogs,
            preço: '150,00',
            alt: 'Watch Dogs 2'
        }
    ]

    const jc = [
        {
            imagem: callofDuty,
            preço: '145,00',
            alt: 'Jogo de guerra call of duty modern warfare'
        },
        {
            imagem: forzaHorizon,
            preço: '234,00',
            alt: 'Jogo de corrida forza horizon 4'
        },
        {
            imagem: gta,
            preço: '100,00',
            alt: 'Gta 5'
        },
        {
            imagem: gtaSa,
            preço: '95,00',
            alt: 'Gta San Andreas'
        },
        {
            imagem: killZone,
            preço: '75,00',
            alt: 'Jogo eletrônico de tiro em primeira pessoa'
        },
        {
            imagem: mario1,
            preço: '55,00',
            alt: ' Jogo do Mario que passa no Brasil'
        },
        {
            imagem: supersmashBross,
            preço: '155,00',
            alt:'Jogo de luta do Mario para o nintento 64'
        },
        {
            imagem: superBomberman,
            preço: '35,00',
            alt:'Bomberman é um robô que tem a tarefa de fabricar bombas.'
        }
    ]


    return(
        <main>
        <section>
            <h1>Jogos para Pc</h1>
        </section>     

        <section>
        {
            pc.map((item)=>(
                <article>
                    <img src={item.imagem} alt={item.alt} />
                    <h3>Preço: {item.preço}</h3>
                </article>
            ))
        }
        </section>  

        <section>
            <h1>Jogos para Consoles</h1>
        </section>

        <section>
        {
            jc.map((item)=>(
                <article>
                    <img src={item.imagem} alt={item.alt} />
                    <h3>Preço: {item.preço}</h3>
                </article>
            ))
        }</section>
        </main>
    )
}