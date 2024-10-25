'use client'
import { useState } from "react";
import Informacoes from "@/estiliacao/Informacoes";
import Link from "next/link";
export default function Informacao(){
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
        <Informacoes>
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
                <Link href={''} className="github"><img src="/gitHub.png" className="github" width="90px" height="60px" alt="GitHub"/></Link>           
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
                <Link href={''} className="githubM"><img src="/gitHub.png" className="githubM" width="90px" height="60px" alt="GitHub"/></Link>    
            </section>
        )} 
        {/*Titulo site*/ }
        <section className="Titulos">
            <h1 className="t1">Help <span className="t21">Car</span></h1>
            <p className="p1">Nós somos uma empresa  que visa ajudar os motoristas a agilizarem o seu tempo caso tenham problemas em seus veículos a partir da utilização de um chat bot.</p>
            
        </section>
            <section className="Info2">
            <h1 className="t2">Agendamento</h1>
            <p className="p6">Nosso agendameno é feito de forma rápida e simples  apenas fazendo perguntas e escolhendo um horário ideal para o cliente e que se encaixe com a agenda de serviços da oficina mecânica escolhida.
                Caso o usuário não saiba em qual oficina ir,ajudamos a escolher a partir da situação do cliente e o ajudando a escolher uma mecânica ideal ao problema e a localização do usuário.</p>    
        </section>
        <section className="Info3">
            <h1 className="t3">Orçamentos</h1>
            <p className="p7">O orçamento é feito de forma rápida e com perguntas voltadas ao problema que o veículo do usuário está enfrentando e calculamos um orçamento médio para otimizar o tempo do cliente e informá-lo o valor que precisará sser gasto por ele.
                Além disso,possibilitamos,que caso o orçamento não entre nas condições do cliente, calcular outros valores mais em conta à situação.</p>    

        </section>
        <section className="Info4">
            <h1 className="t4">Mecânico Delivery</h1>
            <p className="p8">Nossa função aqui  é ajudar nossos clientes de qualquer lugar,caso o veículo não consiga se locomover para uma oficina, temos essa funcionalidade para falarmos com a mecânica mais próxima para levar um mecanico até o local que o usuário se localiza.
                Caso o problema do usuário precise de um guincho,ele será chamado e ,caso o cliente não esteja em sua residência,proporcionaremos uma opção que chame um motorista que o leve à sua residência.</p>    

        </section>
        <section className="Info5">
            <h1 className="t5">Chat Bot</h1>
            <p className="p9">A função do chat bot é ajudar com qualquer problema automotivo dos usuários fazendo um auto diagnóstico para informar os problemas ao usuário.Além disso,junta as outras funcionalidades citadas a cima para assim solucionar ao máximo os problemas dos clientes.</p>    

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
        </Informacoes>
    )
}