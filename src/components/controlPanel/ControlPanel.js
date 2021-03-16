import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { toggleActive, toggleAll, toggleCompleted,deleteCompleted } from '../../redux/actions/todoActions';
import { LoadItemsLeft } from '../LoadTodos';
const ControlPanel = () => {
    const left = LoadItemsLeft()
    const dispatch =useDispatch()
    const handleAll = () => {
        dispatch(toggleAll())
    }
    const handleActive = () =>{
        dispatch(toggleActive())
    }
    const handleCompleted = () => {
        dispatch(toggleCompleted())
    }
    const handleDelete = () =>{
        dispatch(deleteCompleted())
    }
    return (
        <Container className="mt-4">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                       <Row>
                       <Col sm={3} >
                       <Button variant="outline-secondary">{left} Item(s) Left</Button>{' '}
                       </Col>
                       <Col sm={5}>
                       <Button onClick={handleAll} variant="outline-primary">All</Button>{' '}
                       <Button onClick={handleActive} variant="outline-warning">Active</Button>{' '}
                       <Button onClick={handleCompleted} variant="outline-success">Completed</Button>
                       </Col>
                       <Col className="text-right" sm={4}>
                       <Button onClick={handleDelete} variant="outline-danger">Clear Completed</Button>
                       </Col>
                       </Row>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
    );
};

export default ControlPanel;