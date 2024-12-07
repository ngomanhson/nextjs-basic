"use client";

import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CreateModal from "./create.modal";

interface IProps {
    blogs: IBlog[];
}

const TableComp = (props: IProps) => {
    const { blogs } = props;

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-between">
                <h2>Blog List</h2>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShowModalCreate(true);
                    }}
                >
                    Create
                </Button>
            </div>
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
                                <Button variant="primary" className="me-3">
                                    View
                                </Button>
                                <Button variant="success" className="me-3">
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <CreateModal showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} />
        </Fragment>
    );
};

export default TableComp;
