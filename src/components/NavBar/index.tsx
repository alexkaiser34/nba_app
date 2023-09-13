import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from 'react-bootstrap-icons';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function AppNavBar(){

    const themeColor: string = "dark";
    const textColor: string = themeColor == "dark" ? "light" : "dark";


    return (
        <Navbar sticky="top" expand="md" bg={themeColor} variant={themeColor}>
        <Container fluid>
            <LinkContainer to="/Home">
                <Navbar.Brand href="Home">NBA-App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/Home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Scores">
                            <Nav.Link>Scores</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Players">
                            <Nav.Link>Players</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Teams">
                            <Nav.Link>Teams</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Standings">
                            <Nav.Link>Standings</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex me-4">
                    <Button variant="outline-success">Search</Button>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="ms-2 me-4"
                        aria-label="Search"
                        />
                    </Form>
                    <Nav className="d-flex flex-row align-items-baseline justify-content-center">
                        <p className={`text-${textColor} me-3`}>Hello User</p>
                        <NavDropdown
                            title={
                                <span>
                                    <PersonCircle fontVariant={themeColor} size={35} />
                                </span>
                            }
                            align="end"
                            menuVariant={themeColor}
                            drop="down"
                            id='collapsible-nav-dropdown'
                            className='me-2'>
                                <LinkContainer to="/Settings">
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                    </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppNavBar;