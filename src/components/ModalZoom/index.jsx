import styled from "styled-components"
import ElementGaleria from "../Galeria/ElementGaleria"
import Botao from "../Botao"
const Overlay = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
`
const DialogElement = styled.dialog `
    border: none;
    background-color: transparent;
    outline: none;
    position: absolute;
    top: 294px;
`
const FormElement = styled.form`
    position: relative;
`
const ImgExpandida = styled.div`
    width: 1126px;
    height: 660px;
`
const ModalZoom = ({ aoAlternarFavorito, foto, aoFechar }) => {
    return(
        <>
            {foto && <DialogElement open={!!foto}>
                <Overlay/>
                <FormElement method="dialog">
                    <ImgExpandida>
                        <ElementGaleria aoAlternarFavorito={(foto) =>aoAlternarFavorito(foto)} valores={foto} expandida={true}/>
                    </ImgExpandida>
                    <Botao ativo aoEvento={aoFechar}>{<img src="icons/fechar.png"></img>}</Botao>
                </FormElement>
            </DialogElement>}
        </>
    )
}

export default ModalZoom