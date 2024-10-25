import styled from "styled-components";
const Vec=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Noto+Sans:ital,wght@1,100&display=swap');
    .Usu{
        width: 100%;
        min-height: 200%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        .MenuM{display:none}
        .btMenu{display: none;list-style: none;}
        .Menu{
            display: flex;
            position: fixed;
            width: 20%;
            height: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: rgba(0,0,0,.68);
            .link{
                font-size: 1.5em;;
                font-family: "Inconsolata", monospace;
                text-decoration: none;
                color: white;
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
                height: 15%;
                border-top-color:transparent;
                border-left-color:transparent;
                border-right-color:transparent;
                border-bottom-color:rgba(0,0,0,.2);
            }
            .link:hover{color:#009EB5FF}
        }
        .box1{
            margin-left:20%;
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            float: right;
            justify-content: center;
            flex-direction: column;
            .T1{
                width: 100%;
                text-align: center;
                height: 7%;
                padding: 100px 100px;
                font-family:"Inconsolata", monospace;
                font-size: 4em;
            }
            .Armazena{
                display:flex;
                padding:1%;
                justify-content:center;
                align-items: start;  
                button{
                    background-color:rgba(0,0,0,.90);
                    color:white;
                    border: none;
                    padding: 10px 20px;
                    margin: 10px 0;
                    font-size: 18px;
                    cursor: pointer;
                } 
                button:hover{
                    background-color:#0FBAB7;
                    color: black;
                } 
            }
            .Painel{
                z-index: 10;
                flex-grow: 1;
                display: flex;
                padding: 5%;
                flex-wrap: wrap;
                justify-content: space-evenly;
                margin-left: 10px;
                .Vvec{
                z-index: 10;
                padding: 10px;
                width: 100%;
                max-height: 2000px;
                margin: 10px;
                background-color: #dbdbdb;
                border-radius: 5px;
                grid-row-gap: 2em;
                p{
                    font-size:1.2em;
                    border:1px solid black;
                    border-top: none;
                    border-left: none;
                    border-right: none;

                }
                .btt{
                        background-color:rgba(0,0,0,.90);
                        color:white;
                        border: none;
                        padding: 5px 10px;
                        margin: 5px 0;
                        font-size: 18px;
                        cursor: pointer;
                    } 
                    .btt:hover{
                        background-color:#0FBAB7;
                        color: black;
                    } 
                .btt2{
                        background-color:rgba(0,0,0,.90);
                        color:white;
                        border: none;
                        padding: 5px 10px;
                        margin: 5px 0;
                        font-size: 18px;
                        cursor: pointer;
                    } 
                    .btt2:hover{
                        background-color:#0FBAB7;
                        color: black;
                    } 
                    .espaco{
                        border:none;
                        background-color:#FFDB67;
                        color:#FFDB67;

                    }
    }
  }
        }
    }
@media (min-width: 1281px){}
@media (width:1440px){}
@media(min-width: 760px) and (max-width: 1024px){
    .Usu{
        .Menu{width:25%}
        .box1{
            margin-left:25%; 
            .T1{font-size:3em;
                padding: 90px 90px;
            }
        }
     }
}
@media (width:768px){
    .Usu{
        .Menu{.link{font-size:1.1em;}}
        .box1{
            margin-left:25%; 
            .T1{font-size:2.5em;
                padding: 50px 50px;
            }
        }
    }
}
@media (min-width: 320px) and (max-width: 480px){
    .Usu{
        .Menu{display:none;}
        .btMenu{
            z-index: 10;
            color: black;
            position: absolute;
            display:flex;
            flex-wrap:wrap;
            justify-content:flex-start;
            align-items: flex-start;
            flex-direction: column;
            cursor: pointer;
        }
        .MenuM{
            z-index:10;
            display: flex;
            position:fixed;
            background-color: rgba(0,0,0,.8);
            width:100%;
            height: 100%;
            justify-content: center;
            align-items:center;
            flex-direction: column;
            grid-row-gap:2em;
            .link{
                font-size: 1.5em;;
                font-family: "Inconsolata", monospace;
                text-decoration: none;
                color: white;
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
                text-align: center;
                height: 5%;
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
                    border: 1px solid white;
                    background-color: rgba(0,0,0,.2);
                    cursor:pointer;
                }
            
        }
        .MenuM.mostrar{display:flex}
        .box1{
            z-index: 0;
            margin-left:0;
            margin-top:20%; 
            .T1{font-size:1.7em;
                padding: 50px 50px;
            }
        }
    }
}
.container-adiciona{
        z-index:100;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        position: fixed;
        z-index: 10;
        top: 0px;
        left: 0px;
        display: none;
        justify-content:center;
        align-items: center;
        .modal{
            z-index: 100;
            background-color: #f0f0f0;
            width:60;
            min-height: 300px;
            padding: 40px;
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
                background-color: #FFDB67;
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
                .btAdd{
                    display: flex;
                    width: 30%;
                    height: 30px;
                    text-align:center;
                    justify-content:center;
                    align-items:center;
                    background-color:#9e9ca1;
                    border: none;
                    border-radius:20%;
                    color: white;
                }
                .btAdd:hover{background-color:#9b87b5;cursor: pointer;}
            }
        }
    }
    .container-adiciona.mostrar{
        display: flex;
    }
`

export default Vec;