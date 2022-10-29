import styled from "styled-components";

const MenuSectionStyles = styled.div`
  background-color: #f3f4f6;
  height: 1800px;
  .putih {
    width: 1400px;
    height: 80px;
    background-color: white;
    margin-left: 4%;
  }
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
`;

const MenuSection = () => {
  return (
    <MenuSectionStyles>
      <div className="putih"></div>
      <div className="header">
        <h1>Menu</h1>
        <p>Why do you have to choose NasBak mamah djalu</p>
      </div>
    </MenuSectionStyles>
  );
};

export default MenuSection;
