import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
    Col,
    Dropdown,
    Form,
    Button
} from "react-bootstrap";
import Users from "./Users";

function BasicExample() {
    return (
        <>
            <div>
                <Row>
                    <Col sm={2} className="" style={{ height: 600, backgroundColor: "#22A699" }}>
                        <h1 className="container text-light mt-3 mb-5 text-center">
                            LOGO
                        </h1>
                        <h5 className="container text-light mt-3">Dashboard</h5>
                        <NavDropdown
                            id="dropdown-basic-button"
                            title="Settings"
                            className="container mt-3 text-light"
                            variant="dark"
                        >
                            <Dropdown.Item href="" className="">
                                Users
                            </Dropdown.Item>
                            <NavDropdown.Divider />
                            <Dropdown.Item href="#/action-2">
                                Role
                            </Dropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col sm={10} className="bg-light">
                        <Navbar style={{ marginLeft: 850 }}>
                            <Navbar.Brand href="#home">
                                React-Bootstrap
                            </Navbar.Brand>
                            <Navbar.Collapse>
                                <Nav className="">
                                    <NavDropdown
                                        title="Users"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item href="#action/3.1">
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.2">
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Container>
                            <h1>Welcome To Dashboard</h1>
                        </Container>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default BasicExample;
