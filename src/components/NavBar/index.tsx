import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from 'react-bootstrap-icons';
import { NavDropdown } from 'react-bootstrap';

function AppNavBar(){

    const themeColor: string = "dark";
    const textColor: string = themeColor == "dark" ? "light" : "dark";


    return (
        <Navbar sticky="top" expand="md" bg={themeColor} variant={themeColor}>
        <Container fluid>
          <Navbar.Brand href="Home">NBA-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Scores">Scores</Nav.Link>
                    <Nav.Link href="/Players">Players</Nav.Link>
                    <Nav.Link href="/Teams">Teams</Nav.Link>
                    <Nav.Link href="/Standings">Standings</Nav.Link>
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

                            <NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppNavBar;