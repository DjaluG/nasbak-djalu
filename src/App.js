import styled from "styled-components";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import Navbar from "./components/Navbar";
import MenuSection from "./components/MenuSection";

const AppStyles = styled.div`
  height: 1000vh;
`;

function App() {
  return (
    <AppStyles>
      <div className="App">
        <Navbar />
        <HomeSection />
        <FeaturesSection />
        <MenuSection />
      </div>
    </AppStyles>
  );
}

export default App;
