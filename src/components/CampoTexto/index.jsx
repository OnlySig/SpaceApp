import styled from "styled-components"
import search from "/public/imgs/search.png"

const ContainerInput = styled.div `
    position: relative;
    display: flex;
    img{
        cursor: pointer;
        position: absolute;
        right: 0;
        margin: 12px 16px;
    }
`
const InputEstilizado = styled.input `
    padding: 12px 16px;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    width: 570px;
    height: 56px;
    outline: none;
    color: #D9D9D9;
    &::placeholder {
        color: #D9D9D9;
    }
    box-sizing: border-box;
`

const CampoTexto = (props) => {
    return(
        <ContainerInput>
            <InputEstilizado placeholder="O que você procura?" {...props}/>
            <img src={search} alt="icone de busca" />
        </ContainerInput>
    )
} 

export default CampoTexto