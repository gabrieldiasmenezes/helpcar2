import styled from "styled-components";
const Cad=styled.div`
.container-adiciona{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        position: fixed;
        z-index: 20;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content:center;
        align-items: center;
        .modal{
            background-color: #f0f0f0;
            width:60;
            min-height: 300px;
            padding: 40px;
            box-shadow: 5px 5px 5px 5px #9e9ca1;
            position: relative;
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
                    text-decoration: none;
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
    @media (width:1440px){
        .container-adiciona{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        position: fixed;
        z-index: 20;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content:center;
        align-items: center;
        .modal{
            width:60%;
            min-height: 330px;
            padding: 40px;
            .subtitulo{
                font-family: "Afacad Flux", sans-serif;
                font-size: 3em;
                text-align: center;
            }
            .formulario{
                padding:10px 10px;
                input{
                    display: block;
                    width: 100%;
                    height: 35px;
                    font-size: 2em;
                }
                .Nconta{
                    padding: 10px;
                }
                .btAdd{
                    width: 60%;
                    height: 35px;
                    font-size: 2em;
                }
            }
        }
    }
    
}
`
export default Cad;