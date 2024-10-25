'use client'
import QS from "@/estiliacao/QS"
import Link from "next/link";
import { useState } from "react";
export default function QuemSomos(){
    const [mostrapopup,setMostrapopup]=useState(false);
   const mostrar=()=>{
       setMostrapopup(true);
    }
    const fechar=()=>{
        setMostrapopup(false)
    }
   const [mostraMenu,setMostraMenu]=useState(false);
   const mostrarM=()=>{
    setMostraMenu(true)
   }
   const fecharM=()=>{
    setMostraMenu(false)
   }
    return(
        <QS>
             <header className="Cabecalho">
        <h1 className="Titulo"><Link className="t" href={'/'}>HelpCar</Link></h1>
        <nav className="Menu">
                <ul className="links">
                    <Link href={'QuemSomos'} className="QuemSomos">Quem Somos</Link>
                    <Link href={'Info'} className="Sobre">Sobre o site</Link> 
                </ul>
            </nav>
            <ul className="Login">
            <h1 onClick={mostrar} className="Entrar">Entrar</h1>
                <Link href={'https://github.com/gabrieldiasmenezes/helpcar2'} className="github"><img src="/gitHub.png" className="github" width="90px" height="60px" alt="GitHub"/></Link>           
            </ul>
            <ul onClick={mostrarM} className="btMenu">
                <li>_____</li>
                <li>_____</li>
                <li>_____</li>
            </ul>
        </header>
        {mostraMenu && (
            <section className="MenuM mostrar">
                <h1 onClick={mostrar} className="EntrarM">Entrar</h1>
                <button className="Fechar" onClick={fecharM}>x</button>
                <Link href={'QuemSomos'} className="QuemSomosM">Quem Somos</Link>
                <Link href={'Info'} className="SobreM">Sobre o site</Link>
                <Link href={'https://github.com/gabrieldiasmenezes/helpcar2'} className="githubM"><img src="gitHub.png" className="githubM" width="90px" height="60px" alt="GitHub"/></Link>    
            </section>
        )}  
        <section className="Titulos">
            <h1 className="t1">Quem <span className="t21">Somos</span></h1>  
            <p className="p1">Somos uma empresa em  que visa ajudar os motoristas a agilizarem o seu tempo caso tenham problemas em seus veículos a partir da utilização de um chat bot.</p>
        </section>
        <section id="Int" className="Box">
            <h1 className="t2">Integrantes</h1>
            <section className="Int">
            <section className="Int1">
            <img className="img2" src="/gabriel.jfif" width="189px" height="329px" alt="Agendamento"/>
            <h2 className="t3">Gabriel Dias Menezes</h2>
            <p className="p2">RM:555019</p>
            <a href="https://github.com/gabrieldiasmenezes" className="g1">Git Hub</a>
            </section>
            <section className="Int1">
            <img className="img3" src="/julia.enc" width="189px" height="329px" alt="Orcamento"/>
            <h2 className="t4">Júlia Soares Farias dos Santos</h2>
            <p className="p3">RM:554609</p>
            <a className="g1" href="https://github.com/jyx97">Git Hub</a>
            </section>
            <section className="Int1">
            <img className="img4" src="/hellen.jfif" width="189px" height="329px" alt="Delivery"/>
            <h2 className="t5">Hellen Marinho Cordeiro</h2>
            <p className="p4">RM:558841</p>
            <a className="g1" href="https://github.com/hmarinhoo">Git Hub</a>
            </section>
            </section>
            
        </section>  
        <footer className="rodape">
                <section className="c">
                    <h2>Serviços do Bot</h2>
                    <p className="i1">Agendamentos</p>
                    <p className="i1">Orçamentos</p>
                    <p className="i1">Mecanico Delivery</p>
                </section>
                <section className="c">
                    <h2>Informações</h2>
                    <p><Link className="i"  href={'routes/QuemSomos'}>Quem Somos</Link></p>
                    <p><Link className="i"  href={'routes/Info'}>Sobre o site</Link></p>
                </section>
                <section className="c">
                    <h2>Funcionalidades</h2>
                    <p className="i1">Chat Bot</p>
                </section>
        </footer>  
                    {/* <img className="img1" src="public/img1.jpg" height="100%" width="100%" alt=""></img> */}
                    {mostrapopup &&(
                    <div id="adiona" className="container-adiciona mostrar">
                        <div className="modal">
                            <button className="Fechar" onClick={fechar}>x</button>
                            <h3 className="subtitulo">Login</h3>
                            <form action="Usuario"  className="formulario">
                                <input className="email" type="email"  placeholder="Digite o seu email" required/><br />
                                <input className="senha" type="password" maxLength={6} placeholder="Digite sua senha" required/><br />
                                <p className="Nconta">Não tem uma conta?<Link href={'Cadastro'} 
                                className="cad">Crie uma conta Aqui</Link></p>
                                <button className="btAdd">Login</button>
                            </form>
                        </div>
                    </div>
                    )}

        </QS>
    )
}