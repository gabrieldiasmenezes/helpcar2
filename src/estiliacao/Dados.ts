import styled from "styled-components";
const Dads=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Noto+Sans:ital,wght@1,100&display=swap');
    .Usu{
        width: 100%;
        max-height: 150%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        .MenuM{display:none}
        .btMenu{display: none;list-style: none;}
        .Menu{
            display: flex;
            border:1px solid black;
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
                border:1px solid black;
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
            max-height: 200%;
            margin-left:20%;
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            float: right;
            justify-content: center;
            flex-direction:column;
            .T1{
                width: 100%;
                text-align: center;
                min-height: 7%;
                padding: 40px 40px;
                font-family:"Inconsolata", monospace;
                font-size: 4em;
            }
            .listaDados{
                max-height: 200%;
                position: relative;
                justify-content: center;
                align-items: center;
                list-style: none;
                display: flex;
                flex-direction: column;
                grid-row-gap:2em;
                li{
                    border: 1px solid black;
                    width: 50%;
                    padding: 1em;
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
`

export default Dads;