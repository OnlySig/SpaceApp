import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from "./fotos-populares.json"
import Botao from "../../Botao"
const PopularContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 212px;
    margin-left: 24px;
`
const PopularImage = styled.img`
    border-radius: 20px;
`
const Populares = () => {
    return(
        <PopularContainer>
            <Titulo $align="center">
                Populares
            </Titulo>
            {fotos.map(foto => <PopularImage key={foto.id} src={foto.path}></PopularImage>)}
            <Botao>
                Ver mais
            </Botao>
        </PopularContainer>
    )
}

export default Populares