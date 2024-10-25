'use client'

import Principal from "@/estiliacao/Home"
import Link from "next/link";
import { useState } from "react";
export default function Home(){
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
        <Principal>
            {/* Cabecalho */}
            <header className="Cabecalho">
        <h1 className="Titulo"><Link className="t" href={'/'}>HelpCar</Link></h1>
        <nav className="Menu">
                <ul className="links">
                    <Link href={'routes/QuemSomos'} className="QuemSomos">Quem Somos</Link>
                    <Link href={'routes/Info'} className="Sobre">Sobre o site</Link>
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
                <Link href={'routes/QuemSomos'} className="QuemSomosM">Quem Somos</Link>
                <Link href={'routes/Info'} className="SobreM">Sobre o site</Link>
                <Link href={'https://github.com/gabrieldiasmenezes/helpcar2'} className="githubM"><img src="gitHub.png" className="githubM" width="90px" height="60px" alt="GitHub"/></Link>    
            </section>
        )}
        {/*Titulo site*/ }
        <section className="Titulos">
        
            <h1 className="t1">Help <span className="t21">Car</span></h1>
            <p className="p1">Site expecialzado em ajudar nos problemas automotivos dos nossos Usuarios </p>
            <Link className="bt1" href={'routes/Info'}><button className="but">Saiba Mais</button></Link>
        </section>
        <section className="box2">
            <h2 className="t6">Nosso Site</h2>
            <p className="p5">A Help Car tem como objetivo ajudar os nossos Usuarios com questões relacionadas à seus veículos. Oferecendo serviços desde agendamentos, autodiagnóstico e orçamentos tudo feito pelo nosso chatbot.</p>

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
                    {mostrapopup &&(
                    <div id="adiona" className="container-adiciona mostrar">
                        <div className="modal">
                            <button className="Fechar" onClick={fechar}>x</button>
                            <h3 className="subtitulo">Login</h3>
                            <form action="routes/Usuario"  className="formulario">
                                <input className="email" type="email"  placeholder="Digite o seu email" required/><br />
                                <input className="senha" type="password" maxLength={6} placeholder="Digite sua senha" required/><br />
                                <p className="Nconta">Não tem uma conta?<Link href={'routes/Cadastro'} 
                                className="cad">Crie uma conta Aqui</Link></p>
                                <button className="btAdd">Login</button>
                            </form>
                        </div>
                    </div>
                    )}

                     
        </Principal>
    )
}