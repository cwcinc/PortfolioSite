import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            {/* <Navbar.Brand href="#home">Cameron Zifcak</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Button variant="secondary" href="/CameronZifcakResume.pdf" target="_blank">Resume</Button>
                    <Nav.Link href="https://www.linkedin.com/in/cameronz" target="_blank">LinkedIn</Nav.Link>
                    <Nav.Link href="https://github.com/cwcinc" target="_blank">GitHub</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;