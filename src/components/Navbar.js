import styled from "styled-components";
import logo from "../assets/logo.svg";

const NavbarStyles = styled.div`
  position: fixed;
  margin-top: 40px;
  width: 100%;
  margin-left: 60px;
  display: flex;
  align-items: center;
  .logo-navbar {
    display: flex;
    align-items: center;
    margin-right: 125px;
    .logo-name {
      font-family: "Poppins";
      margin-left: 16px;
      font-size: 20px;
    }
  }

  .links {
    font-family: "Montserrat";
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    a {
      margin: 20px;
    }
  }
  .active {
    color: black;
  }
`;

const Navbar = () => {
  return (
    <NavbarStyles>
      <div className="logo-navbar">
        <div>
          <img src={logo} />
        </div>
        <h1 className="logo-name">Nasbak Mmh Djalu</h1>
      </div>
      <div className="links">
        <a className="active">Home</a>
        <a>Features</a>
        <a>Menu</a>
        <a>Testimonial</a>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
