import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="..\img\Zero-logo.png"
          width="30"
          height="30"
          className="d-inline-block"
        />
        {""} Le Cuong
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
