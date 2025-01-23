import s from './styleHeader.module.scss'
import imagens from "../../imagens/Controle.png"
import cd from "../../imagens/Cd.png"
import pc from "../../imagens/Pc.png"
import xbox from "../../imagens/Xbox.png"
import lupa from "../../imagens/Lupa.png"
import carrinho from "../../imagens/Carrinho.png"
import coração from "../../imagens/Coração.png"
import perfil from "../../imagens/Perfil.png"


export default function Header(){
    return(
        <header className={s.header}>
        <img  src={imagens} alt="Imagem de um controle" />
            <nav className={s.nave}>
            
             <ul>
                <li><img src={cd} alt="Imagem de um cd"/> Jogos</li>
                <li><img src={pc} alt="Imagem de um computador" />Pc</li>
                <li><img src={xbox} alt="Imagem de um controle" />Consoles</li>
             </ul>
            </nav>
            <section className={s.sect}>
                <input type="text"/>
                <img src={lupa} alt="Imagem de uma lupa" />
            </section>
            <section className={s.section}>
            <img src={carrinho} alt="Imagem de um carrinho" />
            <img src={coração} alt="Imagem de um coração" />
            <img src={perfil} alt="Imagem para indicar onde clica para ir para o perfil" />
            </section>
        </header>

    )
}