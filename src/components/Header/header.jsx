import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import s from './styleHeader.module.scss'
import imagens from "../../imagens/Controle.png"
import cd from "../../imagens/Cd.png"
import pc from "../../imagens/Pc.png"
import xbox from "../../imagens/Xbox.png"
import lupa from "../../imagens/Lupa.png"
import carrinho from "../../imagens/Carrinho.png"
import coração from "../../imagens/Coração.png"
import perfil from "../../imagens/Perfil.png"
import Pc from "../../pages/pc/Pc.jsx"
import Console from "../../pages/consoles/Console.jsx"
import Jogos from "../../pages/jogos/Jogos.jsx"
import Main from "../Main/main.jsx"


export default function Header(){
    return(
        <BrowserRouter>
        <header className={s.header}>
        <Link to='/'><img  src={imagens} alt="Imagem de um controle" /></Link>
            <nav className={s.nave}>
            
             <ul>
                <li><Link to='/Jogos'><img src={cd} alt="Imagem de um cd" /> Jogos</Link></li>
                <li><Link to='/Pc'><img src={pc} alt="Imagem de um computador" />Pc</Link></li>
                <li><Link to='/Console'><img src={xbox} alt="Imagem de um controle" />Consoles</Link></li>
             </ul>
            </nav>
            <section className={s.sect}>
                <input type="search" name="" id="" placeholder='O que você deseja?'/>
                <img src={lupa} alt="Imagem de uma lupa" />
            </section>
            <section className={s.section}>
            <img src={carrinho} alt="Imagem de um carrinho" />
            <img src={coração} alt="Imagem de um coração" />
            <img src={perfil} alt="Imagem para indicar onde clica para ir para o perfil" />
            </section>
        </header>
        <Routes>
            <Route path='/Jogos' element={<Jogos/>}  />
            <Route path='/Pc' element={<Pc/>} />
            <Route path='/Console' element={<Console/>}/>
            <Route path='/' element={<Main/>}/>
        </Routes>

        </BrowserRouter>

    )
}