import React, {Component} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';
import {Card, DataTable, Page} from '@shopify/polaris';


export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/users/')
        if (res.status === 200) {
            this.setState({
                users: res.data.data
            });
        } else {
            console.log(res)
        }
    }

    DataTable() {
        return this.state.users.map((res, i) => {
            return <UserTableRow obj={res} key={i}/>;
        });
    }


    render() {
        return (
            // <Page title="List Users">
            //     <Card>
            //         <DataTable
            //             columnContentTypes={[
            //                 'text',
            //                 'text',
            //                 'text',
            //                 'text',
            //             ]}
            //             headings={[
            //                 'Full Name',
            //                 'Address',
            //                 'Phone Number',
            //                 'Email',
            //             ]}
            //             rows={users}
            //         />
            //     </Card>
            // </Page>
            <div className="table-wrapper">
            <Page>
            <Table striped bordered hover>
        <thead>
        <tr>
        <th>Full Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {this.DataTable()}
    </tbody>
    </Table>
    </Page>
    </div>
        );
    }
}
