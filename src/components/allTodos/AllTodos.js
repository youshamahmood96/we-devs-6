import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import LoadTodos from '../LoadTodos';
import SingleTodo from './SingleTodo';
const AllTodos = () => {
    const todos = LoadTodos();
    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    {
                        todos.map((data, index) => <SingleTodo key={index} data={data} />)
                    }
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    );
};

export default AllTodos;