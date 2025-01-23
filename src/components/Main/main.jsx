import mortalkombat from "../../imagens/MortalKombat.png"
import mario from "../../imagens/Mario.png"
import horizon from "../../imagens/Horizon.png"
import motorfest from "../../imagens/Motorfest.png"


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
    
    return(
        <main>
            <section>
            <h1>Jogos para Consoles</h1>
            <h2>Ver mais</h2>
            </section>
        
            <section>
            {
                jogos.map((item)=>(
                    
                    <article>   
                        <img src={item.imagem} alt={item.alt} />
                        <h3>Preço:{item.preço}</h3>
                    </article>
                ))
            }
            </section>

            <section>
                <h1>Peças e Periféricos de Pc</h1>
                <h2>Ver mais</h2>
            </section>
        </main>
    )
}