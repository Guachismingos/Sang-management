import { Navbar, Container, Image } from "react-bootstrap";
import brand_img from "../assets/images/white_logo.png";

const Header = () => {
  return (
    <Navbar variant="dark" bg="warning" fixed="top" className="py-2">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Image src={brand_img} width="120px" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
