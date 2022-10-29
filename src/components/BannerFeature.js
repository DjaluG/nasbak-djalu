import styled from "styled-components";

const BannerFeatureStyles = styled.div`
  margin: 0px 70px;
  width: 296px;
  height: 390px;
  box-shadow: -6px 7px 51px -2px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 30px;
  }
  h2 {
    font-family: "Montserrat";
    font-size: 20px;
    width: 176px;
    text-align: center;
  }
  p {
    font-family: "Montserrat";
    font-size: 15px;
    width: 210px;
    text-align: center;
    color: #000000;
    opacity: 0.6;
  }
`;

const BannerFeature = ({ ...props }) => {
  return (
    <BannerFeatureStyles>
      <img src={props.img} />
      <h2>{props.h2}</h2>
      <p>{props.p}</p>
    </BannerFeatureStyles>
  );
};

export default BannerFeature;
