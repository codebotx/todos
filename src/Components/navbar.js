import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Container, Button, FormControl, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {props.searchbar?<Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-auto"
                aria-label="Search"
              />
              <Button variant="dark">Search</Button>
            </Form>:""}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

Header.defaultProps={
  title:"Your title here",
  // searchbar: true
}

Header.propTypes ={
  title:PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}