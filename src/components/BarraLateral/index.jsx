import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaContainer = styled.ul `
    width: 212px;
    list-style: none;
    padding: 0;
    margin: 0;
`

const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListaContainer> 
                    <ItemNavegacao iconeAtivo="icons/home-ativo.png" iconeInativo="icons/home-inativo.png" ativo>
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="icons/mais-vistas-ativo.png" iconeInativo="icons/mais-vistas-inativo.png">
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="icons/mais-curtidas-ativo.png" iconeInativo="icons/mais-curtidas-inativo.png">
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="icons/novas-ativo.png" iconeInativo="icons/novas-inativo.png">
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo="icons/surpreenda-me-ativo.png" iconeInativo="icons/surpreenda-me-inativo.png">
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaContainer>
            </nav>
        </aside> 
    )
}

export default BarraLateral