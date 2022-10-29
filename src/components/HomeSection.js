import styled from "styled-components";
import nasbakPng from "../assets/nasbak.png";

const HomeSectionStyles = styled.div`
  margin: 40px;
  .container {
    background-color: #f3f4f6;
    display: flex;
    padding-top: 180px;
    padding-bottom: 180px;
    padding-left: 100px;
    gap: 124px;
    .left {
      h1 {
        font-family: "Poppins";
        font-size: 50px;
        width: 614px;
      }
      p {
        font-family: "Montserrat";
        font-size: 18px;
        color: rgba(0, 0, 0, 0.5);
        width: 549px;
      }
      button {
        width: 190px;
        height: 60px;
        background: #3eff68;
        border-radius: 32px;
        font-family: "Poppins";
        font-size: 16px;
        color: #ffffff;
        border: none;
        margin-top: 25px;
      }
    }
    img {
      width: 460px;
      height: 460px;
      margin-top: 30px;
    }
  }
`;

const HomeSection = () => {
  return (
    <HomeSectionStyles>
      <div className="container">
        <div className="left">
          <h1>Our food site makes it easy to find local food</h1>
          <p>
            Imagine you don’t need a diet because we provide healthy and
            delicious toad for you! We are providing the best food delivery
            services.
          </p>
          <button>Order Now</button>
        </div>
        <img src={nasbakPng} />
      </div>
    </HomeSectionStyles>
  );
};

export default HomeSection;
