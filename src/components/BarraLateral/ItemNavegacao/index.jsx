import styled from "styled-components"

const ItemInfos = styled.div `
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 30px;
`
const ListaItem = styled.li `
    cursor: pointer;
    font-family: ${ props => props.$ativo ? "GandhiSans-Bold" : "GandhiSans-Regular" };
    font-size: 24px;
    line-height: 29px;
    color: ${ props => props.$ativo ? "#7B78E5" : "#D9D9D9" };
`

const ItemNavegacao = ({children ,iconeAtivo, iconeInativo, ativo = false}) => {
    return(
        <ListaItem $ativo={ativo}>
            <ItemInfos>
                <img src={ativo ? iconeAtivo : iconeInativo} alt={`icone ${children}`} />
                {children}
            </ItemInfos>
        </ListaItem>
    )
}

export default ItemNavegacao