import styled from "styled-components";
const Informacoes=styled.div`
.MenuM{display:none}
.btMenu{display: none;list-style: none;}
.Cabecalho{
    position:absolute;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 40px 20px 40px;
    z-index: 5;
    background-color: rgba(0,0,0,.5);
    .Titulo{
        font-size:3em;
        font-family: "Noto Sans", sans-serif;
        z-index: 5;
        .t{text-decoration:none;color:white;}
        .t:hover{color:#009EB5}
    }
    .Menu{
        display:flex;
        margin:0%;
        font-size:1em;
        font-family: "Inconsolata", monospace;
        z-index: 5;
        .QuemSomos{padding:0px 20px;text-decoration:none;color:white;}
        .QuemSomos:hover{color:#009EB5}
        .Sobre{padding:0px 40px 0px 40px;text-decoration:none;color:white;}
        .Sobre:hover{color:#009EB5FF}
    }
    .Login{
        display:flex;
        padding:0% 5% 0% 3%;
        font-size:1.5em;
        font-family: "Inconsolata", monospace;
        z-index: 5;
        .github{padding:0 20% 0 20%;}
        .Entrar{padding:20px 20px;text-decoration:none;font-size:1em;color:white;cursor: pointer;}
        .Entrar:hover{color:#009EB5}
    }

}
.Titulos{
    z-index: 4;
    grid-row-gap:1.5em;
    position: absolute;
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .t1{
        font-size: 5em;
        font-family: "Noto Sans", sans-serif;
        .t21{color:#009EB5FF;}
    }
    .p1{font-size:1.5em;text-align: center;font-family: "Inconsolata", monospace;}
    .but{
        font-family: "Inconsolata", monospace;
        border:none;
        background-color:#009EB5FF;
        width: 20%;
        height: 100%;
        font-size: 2em;
        cursor: pointer;
    }
}
.Info2{
    position: absolute;
    display: flex;
    background-color:#C4C4C4;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    grid-row-gap: 3em;
    width: 100%;
    height: 60%;
    top: 100%;
    .t2{font-size:3em;font-family:"Noto Sans", sans-serif;}
    .p6{font-size:1.5em;font-family:"Inconsolata", monospace; width:80%;}
    .b1{
        width: 100%;
        .but1{
            border:none;
            background-color:#009EB5;
            font-size: 1.5em;
            width:30%;
            }
    }
}
.Info3{
    position: absolute;
    display: flex;
    background-color:#C4C4C4;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    grid-row-gap: 3em;
    width: 100%;
    height: 60%;
    top: 180%;
    .t3{font-size:3em;font-family:"Noto Sans", sans-serif;}
    .p7{font-size:1.5em;font-family:"Inconsolata", monospace; width:80%;}
    .b2{
        width: 100%;
        .but2{
            border:none;
            background-color:#009EB5;
            font-size: 1.5em;
            width:30%;
            }
    }
}
.Info4{
    position: absolute;
    display: flex;
    background-color:#C4C4C4;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    grid-row-gap: 3em;
    width: 100%;
    height: 60%;
    top: 260%;
    .t4{font-size:3em;font-family:"Noto Sans", sans-serif;}
    .p8{font-size:1.5em;font-family:"Inconsolata", monospace; width:80%;}
    .b3{
        width: 100%;
        .but3{
            border:none;
            background-color:#009EB5;
            font-size: 1.5em;
            width:30%;
            }
    }
}
.Info5{
    position: absolute;
    display: flex;
    background-color:#C4C4C4;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    grid-row-gap: 3em;
    width: 100%;
    height: 60%;
    top: 350%;
    .t5{font-size:3em;font-family:"Noto Sans", sans-serif;}
    .p9{font-size:1.5em;font-family:"Inconsolata", monospace; width:80%;}
    .b4{
        width: 100%;
        .but4{
            border:none;
            background-color:#009EB5;
            font-size: 1.5em;
            width:30%;
            }
    }
}
.rodape{
    position: absolute;
    top:350%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #B59951;
    .c{
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 100px;
        line-height: 5em;
        h2{font-size:2em;color:white;font-family: "Noto Sans", sans-serif;}
        .i{text-decoration:none;color:white;font-size:1.5em;font-family: "Inconsolata", monospace;}
        .i:hover{color:#009EB5}
        .i1{color:white;font-size:1.5em;font-family: "Inconsolata", monospace;}
    }
}
@media (min-width: 1281px){
    .QuemSomos{font-size:1.5em;}
    .Sobre{font-size:1.5em;}
    .Entrar{font-size:1.5em;}
    }
@media(min-width: 760px) and (max-width: 1024px){
    .Titulo{
        position: relative;
        left: 0%;
        .t{font-size:0.8em;}
    }
    .Menu{
        text-align: center;
        .QuemSomos{font-size:1em;}
        .Sobre{font-size:1em;}
    }
    .Login{
        position:relative;
        left:5%;
        width:20%;
        .github{position:relative;left: -70%;}
        .Entrar{position:relative;left: -90%;font-size:1em;}
    }
    .Titulos{
        justify-content:center;
        align-items:center;
        .p1{width:70%;}
    }
    ::placeholder{font-size:1.5em;}
    .Info2{height:80%}
    .Info3{height:80%;top:200%}
    .Info4{height:80%;top:300%}
    .Info5{height:80%;top:400%}
    .rodape{top:400%;.c{padding:30px;}}
}
@media (width:768px){
    .Info4{height:90%;top:300%};
    .Info5{height:90%;top:410%};
    .rodape{top:520%;.c{padding:5px;}}
}
@media (min-width: 320px) and (max-width: 480px){
    .QuemSomos{display:none;}
    .Sobre{display:none;}
    .github{display:none;}
    .Entrar{display:none;}
    .Menu{display:none;}
    .Login{display:none;}
    .Cabecalho{justify-content:center;display:flex;}
    .btMenu{
        color: white;
        position: relative;
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-end;
        align-items: flex-end;
        flex-direction: column;
        left: 20%;
        cursor: pointer;
    }
    .MenuM{
        z-index:10;
        display: none;
        position:fixed;
        background-color: rgba(0,0,0,.8);
        width:100%;
        height: 100%;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        grid-row-gap:2em;
        .QuemSomosM{padding:0px 20px;text-decoration:none;color:white;font-size:2em;}
        .SobreM{padding:0px 40px 0px 40px;text-decoration:none;color:white;font-size:2em;}
        .BotM{padding:0px 20px;text-decoration:none;color:white;font-size:2em;}
        .EntrarM{padding:20px 20px;border:none;color:white;font-size:2em;background-color:none;}
    }
    .githubM{
        position: absolute;
        top: 2%;
        left: 60%;
        width: 70px;
    }
    .Fechar{
                position: absolute;
                color:white;
                font-size: 1.2em;
                top: 2%;
                left:4%;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 4px solid white;
                background-color: rgba(0,0,0,.8);
                cursor:pointer;
            }
            .but{
        position: relative;
        border: 1px solid black;
        width:100%;}
        .bt1{
        .but{width:30%;font-size:1.5em;}
        }
        .Info2{
            height:100%;
            .t2{font-size:2.5em;};
            .p6{font-size:1.2em;};
            .b1{width:100%;.but1{font-size:1.2em;width:70%;}}
        }
        .Info3{
            height:100%;top:220%;
            .t3{font-size:2.5em;};
            .p7{font-size:1.2em;};
            .b2{width:100%;.but2{font-size:1.2em;width:70%;}}
        }
        .Info4{
            height:100%;
            top:350%;
            .t4{font-size:2.5em;};
            .p8{font-size:1.2em;};
            .b3{width:100%;.but3{font-size:1.2em;width:70%;}}
        }
        .Info5{
            height:100%;
            top:480%;
            .t5{font-size:2.5em;};
            .p9{font-size:1.2em;};
            .b4{width:100%;.but4{font-size:1.2em;width:70%;}}
        }
        .rodape{
            top:610%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .c{padding:30px;}
        }
    }
    .MenuM.mostrar{display:flex}
    .container-adiciona{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        position: fixed;
        z-index: 20;
        top: 0px;
        left: 0px;
        display: none;
        justify-content:center;
        align-items: center;
        .modal{
            background-color: #f0f0f0;
            width:60;
            min-height: 300px;
            padding: 40px;
            border: 10px solid #009EB5;
            box-shadow: 0 0 0 10px white;
            position: relative;
            .Fechar{
                position: absolute;
                font-size: 1.2em;
                top: -30px;
                right: -30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 4px solid white;
                background-color: #009EB5;
                cursor:pointer;
            }
            .subtitulo{
                font-family: "Afacad Flux", sans-serif;
                font-size: 2em;
            }
            .formulario{
                padding:10px 10px;
                justify-content:center;
                align-items:center;
                input{
                    display: block;
                    width: 100%;
                    height: 30px;
                    text-align:center;
                    background-color:#9e9ca1;
                    border:none;
                    color: white;
                }
                ::placeholder{
                    font-family: "Afacad Flux", sans-serif;
                    color: white;
                }
                .Nconta{
                    padding: 10px;
                    .cad{color:#009EB5;}
                    cursor:pointer;
                }
                .btAdd{
                    display: flex;
                    width: 60%;
                    height: 30px;
                    text-align:center;
                    justify-content:center;
                    align-items:center;
                    background-color:#9e9ca1;
                    border: none;
                    color: white;
                }
                .btAdd:hover{background-color:#009EB5;cursor: pointer;}
            }
        }
    }
    .container-adiciona.mostrar{display: flex;}
`
export default Informacoes;