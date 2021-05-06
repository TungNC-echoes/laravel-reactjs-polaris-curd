import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserFullName = this.onChangeUserFullName.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            full_name: '',
            address: '',
            phone_number: '',
            email: ''
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/users/' + this.props.match.params.id)
        console.log(res.data)
        if (res.status === 200) {
            this.setState({
                full_name: res.data.full_name,
                address: res.data.address,
                phone_number: res.data.phone_number,
                email: res.data.email
            });
        } else {
            console.log(res)
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

        const userObject = {
            full_name: this.state.full_name,
            address: this.state.address,
            phone_number: this.state.phone_number,
            email: this.state.email
        };

        const res = await axios.put('http://localhost:8000/api/users/' + this.props.match.params.id, userObject)
        if (res.status === 200 ) {
            // Redirect to user List
            this.props.history.push('/users-listing?page=1')
        } else {
            console.log(res.errors)
        }
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={this.state.full_name} onChange={this.onChangeUserFullName} />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeUserAddress} />
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={this.state.phone_number} onChange={this.onChangeUserPhoneNumber} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={this.state.email} onChange={this.onChangeUserEmail} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update User
                </Button>
            </Form>
        </div>);
    }
}
