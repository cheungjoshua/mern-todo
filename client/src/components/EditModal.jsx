import React from "react";
import {
  Modal,
  Button,
  Form,
  Col,
  Row,
  Container,
  CloseButton,
} from "react-bootstrap";

export default function EditModal({ show, onHide, oldTodo }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Form.Group>
                <Form.Control type="text" placeholder={oldTodo}></Form.Control>
              </Form.Group>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Col>
              <Button onClick={onHide}>Cancel</Button>
            </Col>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}
