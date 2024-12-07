"use client";

import Table from "react-bootstrap/Table";

const TableComp = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.content}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableComp;
