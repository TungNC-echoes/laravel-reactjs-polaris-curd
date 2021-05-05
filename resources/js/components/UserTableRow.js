import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class UserTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    deleteExpense() {
        axios.delete('http://localhost:8000/api/users/' + this.props.obj.id)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.full_name}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.phone_number}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-link" to={"/edit-user/" + this.props.obj.id}>
                        <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteExpense} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
