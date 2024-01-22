import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerPrincipal from "./assets/banner.png"
import Galeria from "./components/Galeria"

import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  max-width: 100%;
  padding: 0 24px;
`
const MainContent = styled.main`
  display: flex;
  gap: 24px;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const GaleriaContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho />
        <MainContent>
          <BarraLateral/>
          <GaleriaContainer>
            <Banner img={bannerPrincipal}>
              A galeria mais completa de fotos do espaço!
            </Banner>
            <Galeria aoFotoSelecionada={foto => setFotoSelecionada(foto)} fotos={fotosGaleria}/>
          </GaleriaContainer>
        </MainContent>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)}/>
    </FundoGradiente>
  )
}

export default App
