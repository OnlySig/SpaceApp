import styled from "styled-components"

const ContainerBotao = styled.button`
    cursor: pointer;
    position: ${e => e.$ativo ? 'absolute' : 'relative'};
    display: flex;
    justify-content: center;
    padding: 12px 22px;
    border: ${e => e.$ativo ? 'none' : '2px solid var(--Degrad-com-rosa, #C98CF1)'};
    border-radius: 10px;
    background-color: transparent;
    color: white;
    top: 0;
    right: 0;
`
const Botao = ({ ativo = false, aoEvento, children }) => {
    return(
        <>
            <ContainerBotao $ativo={ativo} onClick={aoEvento}>
                {children}
            </ContainerBotao>
        </>
    )
}

export default Botao