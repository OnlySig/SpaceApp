import Tags from "./Tags"
import Titulo from "../Titulo"
import styled from "styled-components"
import Populares from "./Papulares"
import ElementGaleria from "./ElementGaleria"

const GaleriaContainer = styled.div `
    display: flex;
`
const SecaoPrincipal = styled.section `
    flex-grow: 1;
`

const ElementContent = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ aoAlternarFavorito, fotos = [], aoFotoSelecionada}) => {
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoPrincipal>
                    <Titulo>Navegue por galeria!</Titulo>
                    <ElementContent>
                        {fotos.map(foto => <ElementGaleria aoAlternarFavorito={aoAlternarFavorito} aoZoomSolicitado={aoFotoSelecionada} key={foto.id} valores={foto}></ElementGaleria>)}
                    </ElementContent>
                </SecaoPrincipal>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria