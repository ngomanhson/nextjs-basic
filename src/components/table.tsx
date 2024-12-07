"use client";

import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

interface IProps {
    blogs: IBlog[];
}

const TableComp = (props: IProps) => {
    const { blogs } = props;

    console.log("====================================");
    console.log("blogs", blogs);
    console.log("====================================");

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {blogs?.map((blog) => (
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.author}</td>
                        <td>
                            <Button variant="success" className="me-3">
                                Edit
                            </Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableComp;
