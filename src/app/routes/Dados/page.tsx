'use client'
import Link from "next/link";
import Dads from "../../../estiliacao/Dados"
import { useState } from "react";
export default function Dados(){
    const [mostraMenu,setMostraMenu]=useState(false);
   const mostrarM=()=>{
    setMostraMenu(true)
   }
   const fecharM=()=>{
    setMostraMenu(false)
   }
    return(
        <Dads>
        <div className="Usu">
                <section className="Menu">
                    <Link className="link" href={'Usuario'}>Pagina do Usuario</Link>
                    <Link className="link" href={'Dados'}>Meus Dados</Link>
                    <Link className="link" href={'Veiculos'}>Meus Veículos</Link>
                    <Link className="link" href={'/'}>LogOut</Link>
                </section>
                <ul onClick={mostrarM} className="btMenu">
                        <li>_____</li>
                        <li>_____</li>
                        <li>_____</li>
                </ul>
                    {mostraMenu && (
                    <section className="MenuM mostrar">
                        <Link className="link" href={'Usuario'}>Pagina do Usuario</Link>
                        <button className="Fechar" onClick={fecharM}>x</button>
                        <Link className="link" href={'Veiculos'}>Meus Veículos</Link>
                        <Link className="link" href={'/'}>LogOut</Link>    
                    </section>
                )}
                <section className="box1">
                    <h1 className="T1">Seus Dados</h1>
                    <ul className="listaDados">
                        <li>Nome</li>
                        <li>Email</li>
                        <li>CEP</li>
                        <li>Rua</li>
                        <li>Numero</li>
                        <li>Cidade</li>
                        <li>Estado</li>
                        <li>******</li>
                    </ul>
                </section>
            </div>
        
        </Dads>
    )
}