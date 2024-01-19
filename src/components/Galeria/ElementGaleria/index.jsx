import styled from "styled-components"

const ContainerElement = styled.div`
    display: flex;
    flex-direction: column;
`

const ImgElement = styled.div`
    background-image: url(${valores => valores.$url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 448px;
    height: 256px;
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
const IconFavoElement = styled.img `
    cursor: pointer;
`
const IconExpandElement = styled.img `
    cursor: pointer;
`
const ElementGaleria = ({ valores }) => {
    return(
        <ContainerElement>
            <ImgElement $url={valores.path}/>
            <ContentInfosElement>
                <TitleElement>{valores.titulo}</TitleElement>
                <OtherInfosElement>
                    <ParagrafElement>{valores.fonte}</ParagrafElement>
                    <IconsElement>
                        <IconFavoElement src="/icons/favorito.png"/>
                        <IconExpandElement src="/icons/expandir.png"/>
                    </IconsElement>
                </OtherInfosElement>
            </ContentInfosElement>
        </ContainerElement>
    )
}

export default ElementGaleria