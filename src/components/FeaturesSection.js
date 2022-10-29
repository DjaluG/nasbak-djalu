import styled from "styled-components";
import BannerFeature from "./BannerFeature";
import Bilek from "../assets/bilek.png";

const FeaturesSectionStyles = styled.div`
  padding-bottom: 160px;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    h1 {
      font-family: "Montserrat";
      font-size: 50px;
      padding-top: 20px;
      margin-bottom: 18px;
    }
    p {
      margin: 0;
      font-family: "Montserrat";
      font-size: 18px;
      color: #000000;
      opacity: 0.5;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .center {
      display: flex;
    }
  }
`;

const FeaturesSection = () => {
  return (
    <FeaturesSectionStyles>
      <div className="header">
        <h1>Features</h1>
        <p>Why do you have to choose NasBak mamah djalu</p>
      </div>
      <div className="container">
        <div className="center">
          <BannerFeature
            img={Bilek}
            p="With a price of 5 thousand rupiah you can get 1 portion of grilled
              rice"
            h2="Cheap price but good quality"
          />
          <BannerFeature
            img={Bilek}
            p="With a price of 5 thousand rupiah you can get 1 portion of grilled
            rice"
            h2="Cheap price but good quality"
          />
          <BannerFeature
            img={Bilek}
            p="With a price of 5 thousand rupiah you can get 1 portion of grilled
          rice"
            h2="Cheap price but good quality"
          />
        </div>
      </div>
    </FeaturesSectionStyles>
  );
};

export default FeaturesSection;
