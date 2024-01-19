import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerPrincipal from "./assets/banner.png"

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  max-width: 100%;
  height: 100vh;
  padding: 0 24px;
`
const MainContent = styled.div`
  display: flex;
  gap: 24px;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho />
        <MainContent>
          <BarraLateral/>
          <Banner img={bannerPrincipal}>
            A galeria mais completa de fotos do espaço!
          </Banner>
        </MainContent>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
