import Cardlist from "./components/Cards/Cardlist";
import Carousel from "./components/Carousel/Carousel";
import Navigation from "./components/Navigation/Navigation";
import Searchbox from "./components/Searchbox/Searchbox";
import styled from "styled-components";

const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    opacity: 1;
`

function App() {
 return(
   <>
    <Navigation />
    <Carousel />
    <Searchbox />
    <ContainerList>
      <Cardlist />
      <Cardlist />

    </ContainerList>
   </>
 );
}

export default App;
