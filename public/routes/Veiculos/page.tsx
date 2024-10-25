'use client'
import Link from "next/link";
import Vec from "../../../estiliacao/Veiculos"
import { useRef, useState } from "react";

type VeiculoProps={
    placa:string,
    ano_fab:string,
    ano_model:string,
    marca:string,
    modelo:string,
    cor:string,
    segmento:string,
    tipo_comb:string
}
export default function Veiculos(){
    const [mostraMenu,setMostraMenu]=useState(false);
   const mostrarM=()=>{
    setMostraMenu(true)
   }
   const fecharM=()=>{
    setMostraMenu(false)
   }
   const[mostraPopup,setMostraPopup]=useState(false)
    const mostrar=()=>{
    setMostraPopup(true)
   }
    const retirar=()=>{
    setMostraPopup(false)
   }
    const dadosVec={
        placa:'',
        ano_fab:'',
        ano_model:'',
        marca:'',
        modelo:'',
        cor:'',
        segmento:'',
        tipo_comb:''
    }
    const[veiculo,setVeiculo]=useState<VeiculoProps>(dadosVec)
    const[veiculos,setVeiculos]=useState<VeiculoProps[]>([])
    const digVec=(e:React.ChangeEvent<HTMLInputElement>)=>{
       const{name,value}=e.target
       setVeiculo({...veiculo,[name]:value})
    }
    //Adicionar Vec
    const cadVec=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setVeiculos([...veiculos,veiculo]);
        setVeiculo(dadosVec);
    }
    //Tentativa de consumir uma API de placa de um veiculo!!
    // const PlacaBlur=useRef<HTMLInputElement>(null)
    // const numFoco=useRef<HTMLInputElement>(null)
    // const buscarPlaca=(e:React.FocusEvent<HTMLInputElement>)=>{
    //     const placa=e.target.value.replace(/\D/g,'')
    //     fetch(`https://api.consultarplaca.com.br/v2/${placa}`)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setVeiculo({...veiculo,
    //             ano_fab:data.ano_fabricacao,
    //             ano_model:data.ano_modelo,
    //             marca:data.marca,
    //             modelo:data.modelo,
    //             cor:data.cor,
    //             segmento:data.segmento,
    //             tipo_comb:data.combustivel
    //         })
    //     })
    //     if(PlacaBlur.current) numFoco.current?.focus()
    // }
    return(
        <Vec>
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
                    <h1 className="T1">Gerenciamento de Veiculos</h1>
                    <section className="Armazena">
                        <button id="botao1" onClick={mostrar} className="botao1">Adicionar Veiculo</button>
                        </section>
                        <div className="Painel">
                                {
                                    veiculos.map((v,i)=>(
                                        <div key={i} className="Vvec">
                                            <p>Placa:{v.placa}</p><br />
                                            <p>Ano de Fabricação:{v.ano_fab}</p><br />
                                            <p>Ano do modelo:{v.ano_model}</p><br />
                                            <p>Marca:{v.marca}</p><br />
                                            <p>Modelo:{v.modelo}</p><br />
                                            <p>Cor:{v.cor}</p><br />
                                            <p>Segmento:{v.segmento}</p><br />
                                            <p>Tipo de Combustivel:{v.tipo_comb}</p><br />
                                        </div>
                                    ))
                                }  
                        </div>
        </section>
        {mostraPopup &&(
        <div id="adiona" className="container-adiciona mostrar">
            <div className="modal">
                <button className="Fechar" onClick={retirar}>x</button>
                <h3 className="subtitulo">Adicione o seu Veiculo</h3>
                
                <form onSubmit={cadVec} className="formulario">
                    <input type="text" name="placa" /*onBlur={buscarPlaca}*/ onChange={digVec} value={veiculo.placa} maxLength={8} placeholder="Digite a placa do seu veiculo" required/><br />
                    <input type="text" name="ano_fab" onChange={digVec} value={veiculo.ano_fab} placeholder="Ano de fabricação" required/><br />
                    <input type="text" name="ano_model" onChange={digVec} value={veiculo.ano_model} placeholder="Ano do modelo" required/><br />
                    <input type="text" name="marca" onChange={digVec} value={veiculo.marca} placeholder="Marca" required/><br />
                    <input type="text" name="modelo" onChange={digVec} value={veiculo.modelo} placeholder="Modelo" required/><br />
                    <input type="text" name="cor" onChange={digVec} value={veiculo.cor} placeholder="Cor" required/><br />
                    <input type="text" name="segmento" onChange={digVec} value={veiculo.segmento} placeholder="Segmento" required/><br />
                    <input type="text" name="tipo_comb" onChange={digVec} value={veiculo.tipo_comb} placeholder="Tipo de Combustivel" required/><br />
                    <button type="submit" className="btAdd">Adicionar Veiculo</button>
                </form>
            </div>
        </div>
        )}
            </div>
        </Vec>
    )
}