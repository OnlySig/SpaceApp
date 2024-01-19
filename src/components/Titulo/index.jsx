import styled from "styled-components";

const Titulo = styled.h2 `
    color: #7B78E5;
    font-size: 32px;
    text-align: ${ props => props.$align ? props.$align : 'left' };
`

export default Titulo