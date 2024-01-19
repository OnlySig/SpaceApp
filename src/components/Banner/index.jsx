import styled from "styled-components"

const BannerContainer = styled.div `
    background-image: url(${props => props.$img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 328px;
    border-radius: 20px;
`

const TextoSpan = styled.span `
    display: block;
    margin: 92px 64px;
    color: #FFF;
    font-size: 40px;
    width: 300px;
`

const Banner = ({children, img}) => {
    console.log(img)
    return(
        <BannerContainer $img={img}>
            <TextoSpan>
                {children}
            </TextoSpan>
        </BannerContainer>
    )
}
export default Banner