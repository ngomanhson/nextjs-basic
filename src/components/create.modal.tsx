"use client";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import { toast } from "react-toastify";

interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = () => {
        fetch("http://localhost:8000/blogs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, author, content }) })
            .then((res) => res.json())
            .then((res) => {
                if (res) {
                    toast.success("Create blog successfully");
                    handleCloseModal();
                }
            });

        console.log({ title, author, content });
    };

    const handleCloseModal = () => {
        setShowModalCreate(false);
        setTitle("");
        setAuthor("");
        setContent("");
    };

    return (
        <Modal
            show={showModalCreate}
            onHide={() => {
                handleCloseModal();
            }}
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="..." value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="..." value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        handleCloseModal();
                    }}
                >
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateModal;
