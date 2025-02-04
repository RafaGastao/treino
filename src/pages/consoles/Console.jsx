import nintendo from "../../imagens/N64.png"
import plasytation from "../../imagens/PS2.png"
import xboxSeries from "../../imagens/XboxSeriesS.png"
import plasytation1 from "../../imagens/Ps1.png"
import plasytation5 from "../../imagens/Ps5.png"
import switch1 from "../../imagens/Switch.png"








export default function Console(){
    const consoles = [
        {
            imagem: nintendo,
            preço: '1500,00',
            alt: 'Console Nintendo 64'
        },
        {
            imagem: plasytation,
            preço: '2000,00',
            alt: 'Console Plasytation 2'
        },
        {
            imagem: xboxSeries,
            preço: '3500,00',
            alt: 'Console  XboxSeriesS'
        },
        {
            imagem: plasytation1,
            preço: '1550,00',
            alt: 'Console Plasytation 1'
        },
        {
            imagem: plasytation5,
            preço: '5000,00',
            alt: 'Console plasytation 5' 
        },
        {
            imagem: switch1,
            preço: '5600,00',
            alt: 'Switch'
        }
    ]
    return(
        <main>
            <section>
                <h1>Consoles</h1>
            </section>
            
            <section>
            {
                consoles.map((item)=>(
                    <article>
                        <img src={item.imagem} alt={item.alt} />
                        <h3>Preço: {item.preço}</h3>
                    </article>
                ))
            }
            </section>
        
        </main>

        
    )
}