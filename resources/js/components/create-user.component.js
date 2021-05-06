import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import UsersList from './users-listing.component';
import Swal from 'sweetalert2';


export default class CreateUser extends Component {
    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeUserFullName = this.onChangeUserFullName.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            full_name: '',
            address: '',
            phone_number: '',
            email: ''
        }
    }

    onChangeUserFullName(e) {
        this.setState({full_name: e.target.value})
    }

    onChangeUserAddress(e) {
        this.setState({address: e.target.value})
    }

    onChangeUserPhoneNumber(e) {
        this.setState({phone_number: e.target.value})
    }

    onChangeUserEmail(e) {
        this.setState({email: e.target.value})
    }

    async onSubmit(e) {
        e.preventDefault()
        const user = {
            full_name: this.state.full_name,
            address: this.state.address,
            phone_number: this.state.phone_number,
            email: this.state.email
        };
        const res = await axios.post('http://localhost:8000/api/users/', user);
        debugger
        if (res.status === 200) {
            Swal.fire(
                'Amazing, Good job!',
                'User Added Successfully',
                'success'
            )
            this.props.history.push('/users-listing?page=1')
        } else {
            console.log(res)
        }
    }

    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" value={this.state.full_name}
                                          onChange={this.onChangeUserFullName}/>
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="textarea" value={this.state.address}
                                          onChange={this.onChangeUserAddress}/>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" value={this.state.phone_number}
                                          onChange={this.onChangeUserPhoneNumber}/>
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={this.state.email}
                                          onChange={this.onChangeUserEmail}/>
                        </Form.Group>
                    </Col>

                </Row>


                <Button variant="primary" size="lg" block="block" type="submit">
                    Add Users
                </Button>
            </Form>
            <br></br>
        </div>);
    }
}
