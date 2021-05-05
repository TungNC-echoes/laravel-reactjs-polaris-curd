import React from "react";
import ReactDOM from 'react-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditUser from "./components/edit-user.component";
import UsersList from "./components/users-listing.component";
import CreateUser from "./components/create-user.component";

function App() {
    return (<Router>
        <div className="App">
            <header className="App-header">
                <Navbar>
                    <Container>

                        <Navbar.Brand>
                            <Link to={"/create-expense"} className="nav-link">
                                Expense manager
                            </Link>
                        </Navbar.Brand>

                        <Nav className="justify-content-end">
                            <Nav>
                                <Link to={"/create-expense"} className="nav-link">
                                    Create Expense
                                </Link>
                                <Link to={"/expenses-listing"} className="nav-link">
                                    Expenses List
                                </Link>
                            </Nav>
                        </Nav>

                    </Container>
                </Navbar>
            </header>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/' component={CreateUser} />
                                <Route path="/create-user" component={CreateUser} />
                                <Route path="/edit-user/:id" component={EditUser} />
                                <Route path="/users-listing" component={UsersList} />
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Router>);
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
