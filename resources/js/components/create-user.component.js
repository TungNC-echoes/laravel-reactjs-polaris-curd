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
        this.onChangeUsersName = this.onChangeUsersName.bind(this);
        this.onChangeUsersAmount = this.onChangeUsersAmount.bind(this);
        this.onChangeUsersDescription = this.onChangeUsersDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            description: '',
            amount: ''
        }
    }

    onChangeUsersName(e) {
        this.setState({name: e.target.value})
    }

    onChangeUsersAmount(e) {
        this.setState({amount: e.target.value})
    }

    onChangeUsersDescription(e) {
        this.setState({description: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const user = {
            name: this.state.name,
            amount: this.state.amount,
            description: this.state.description
        };
        axios.post('http://localhost:8000/api/users/', user)
            .then(res => console.log(res.data));
        Swal.fire(
            'Good job!',
            'User Added Successfully',
            'success'
        )

        this.setState({name: '', amount: '', description: ''})
    }

    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.onChangeUsersName}/>
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group controlId="Amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" value={this.state.amount}
                                          onChange={this.onChangeUsersAmount}/>
                        </Form.Group>
                    </Col>

                </Row>


                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="textarea" value={this.state.description}
                                  onChange={this.onChangeUsersDescription}/>
                </Form.Group>

                <Button variant="primary" size="lg" block="block" type="submit">
                    Add Users
                </Button>
            </Form>
            <br></br>
            <br></br>

            <UsersList> </UsersList>
        </div>);
    }
}
