import React, { Component } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "react-bootstrap";
import everyday from "../assets/everyday.gif";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center shadow m-3">
          <Col md="auto">
            <Card border="primary m-5" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={everyday} alt="" />
              <Card.Body>
                <Card.Title>To Do List</Card.Title>
                <Card.Text>Select Your Choice :</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <button
                    className="btn btn-wrap btn-info btn-md px-5"
                    onClick={this.handleOnClick}
                  >
                    ADD Your List
                  </button>
                </ListGroupItem>
                <ListGroupItem>
                  <button
                    className="btn btn-wrap btn-info btn-md px-5"
                    onClick={this.handleOnClick}
                  >
                    UPDATE Your List
                  </button>
                </ListGroupItem>
                <ListGroupItem>
                  <button
                    className="btn btn-wrap btn-info btn-md px-5"
                    onClick={this.handleOnClick}
                  >
                    VIEW Your List
                  </button>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
