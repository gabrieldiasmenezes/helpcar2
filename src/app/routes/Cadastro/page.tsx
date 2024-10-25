'use client'
import { useRef, useState } from "react";
import Cad from "../../../estiliacao/Cadastro";

type UsuarioProps={
    nome:string;
    email:string;
    cep:string;
    rua:string;
    numero:string;
    bairro:string;
    cidade:string;
    estado:string;
    senha:string
}
export default function Cadastro(){
    // Cadastrar o usuario
   const dadosUsuario={
    nome:'',
    email:'',
    cep:'',
    rua:'',
    numero:'',
    bairro:'',
    cidade:'',
    estado:'',
    senha:''
}
const[usuario,setUsuario]=useState<UsuarioProps>(dadosUsuario)
const[usuarios,setUsuarios]=useState<UsuarioProps[]>([])
const digUsuario=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target
    setUsuario({...usuario,[name]:value})
}
const cadUsuario=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setUsuarios([...usuarios,usuario])
    setUsuario(dadosUsuario)
}
//API CEP
const cepBlur=useRef<HTMLInputElement>(null)
const numFoco=useRef<HTMLInputElement>(null)
const buscarCep=(e:React.FocusEvent<HTMLInputElement>)=>{
    const cep=e.target.value.replace(/\D/g,'')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response=>response.json())
    .then(data=>{
        setUsuario({...usuario,rua:data.logradouro,
            bairro:data.bairro,
            cidade:data.localidade,
            estado:data.uf
        })
    })
    if(cepBlur.current) numFoco.current?.focus()
}
   
    return (
        <Cad>
        <div id="adiona" className="container-adiciona mostrar">
                        <div className="modal">
                            <h3 className="subtitulo">Cadastro</h3>
                            <form action="/Usuario" className="formulario">
                                <input className="nome" name="nome" type="text" onChange={digUsuario} value={usuario.nome} placeholder="Nome" required /><br />
                                <input className="email" name="email" type="email" onChange={digUsuario} value={usuario.email}   placeholder="Digite o seu email" required /><br />
                                <input className="CEP" name="cep" type="text" maxLength={9} onBlur={buscarCep} onChange={digUsuario} value={usuario.cep}  placeholder="Digite seu CEP" required/><br/>
                                <input className="rua" name="rua" type="text" maxLength={50} onChange={digUsuario} value={usuario.rua}  placeholder="Rua" required/><br />
                                <input className="numero" name="numero" type="text" maxLength={5} onChange={digUsuario} value={usuario.numero}  placeholder="Número" required/><br/>
                                <input className="cidade" name="cidade" type="text" maxLength={50} onChange={digUsuario} value={usuario.cidade}  placeholder="Cidade" required/><br/>
                                <input className="estado" name="estado" type="text" maxLength={2} onChange={digUsuario} value={usuario.estado}  placeholder="Estado" required/><br/>
                                <input className="senha" name="senha" type="password" maxLength={6} onChange={digUsuario} value={usuario.senha}  placeholder="Digite uma senha" required /><br />
                                <button onSubmit={()=>cadUsuario} className="btAdd">Cadastrar</button>  
                            </form>
                        </div>
                    </div>
        </Cad>
    )
}