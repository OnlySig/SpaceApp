import styled from "styled-components"

const ContainerElement = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
`
const ImgElement = styled.div`
    display: flex;
    flex-grow: 1;
    background-image: url(${valores => valores.$url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-width: 400px;
    height: ${$expandida => $expandida.$expandida ? '660px' : '256px'};
    border-radius: 20px 20px 0 0;
`
const ContentInfosElement = styled.div `
    background-color: #001634;
    height: 80px;
    border-radius: 0 0 20px 20px;
    padding: 16px;
    box-sizing: border-box;
`
const TitleElement = styled.h3 `
    font-size: 16px;
    color: #FFF;
    font-weight: 700;
    margin: 0;
`
const ParagrafElement = styled.p `
    font-size: 14px;
    color: #FFF;
    font-weight: 400;
    margin: 0;
`
const OtherInfosElement = styled.div `
    display: flex;
    justify-content: space-between;
`
const IconsElement = styled.div `
    display: flex;
    gap: 24px;
`
const IconFavoritoElement = styled.img `
    cursor: pointer;
`
const IconExpandElement = styled.img `
    cursor: pointer;
`
const ElementGaleria = ({ aoAlternarFavorito, valores, aoZoomSolicitado, expandida=false }) => {
    const iconeFavorito = valores.favorita ? '/icons/favorito-ativo.png' : '/icons/favorito.png'
    return(
        <ContainerElement>
            <ImgElement $url={valores.path} $expandida={expandida}/>
            <ContentInfosElement>
                <TitleElement>{valores.titulo}</TitleElement>
                <OtherInfosElement>
                    <ParagrafElement>{valores.fonte}</ParagrafElement>
                    <IconsElement>
                        <IconFavoritoElement src={iconeFavorito} onClick={() => aoAlternarFavorito(valores)}/>
                        {expandida ? '' : <IconExpandElement src="/icons/expandir.png" onClick={() => aoZoomSolicitado(valores)}/>}
                    </IconsElement>
                </OtherInfosElement>
            </ContentInfosElement>
        </ContainerElement>
    )
}

export default ElementGaleria