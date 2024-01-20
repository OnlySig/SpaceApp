import styled from "styled-components"
import ElementGaleria from "../Galeria/ElementGaleria"
const Overlay = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
`
const DialogElement = styled.dialog `
    position: absolute;
    top: 294px;
`

const ModalZoom = ({ foto }) => {
    return(
        <>
            {foto && <DialogElement open={!!foto}>
                <Overlay/>
                <ElementGaleria valores={foto} expandida={true}/>
                <form method="dialog">
                    <button>testButtom</button>
                </form>
            </DialogElement>}
        </>
    )
}

export default ModalZoom