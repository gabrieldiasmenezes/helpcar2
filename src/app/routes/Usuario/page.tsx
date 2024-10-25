'use client'
import Link from "next/link";
import Usu from "../../../estiliacao/Usuario"
import { useState } from "react";
export default function Usuario(){
    const [mostraMenu,setMostraMenu]=useState(false);
   const mostrarM=()=>{
    setMostraMenu(true)
   }
   const fecharM=()=>{
    setMostraMenu(false)
   }
    return(
        <Usu>
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
                        <button className="Fechar" onClick={fecharM}>x</button>
                        <Link className="link" href={'Usuario'}>Pagina do Usuario</Link>
                        <Link className="link" href={'Dados'}>Meus Dados</Link>
                        <Link className="link" href={'Veiculos'}>Meus Veículos</Link>
                        <Link className="link" href={'/'}>LogOut</Link>    
                    </section>
                )}
                <section className="box1">
                    <h1 className="T1">Bem vindo à sua página!!</h1>
                </section>
            </div>
        </Usu>
    )
}