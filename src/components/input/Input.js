import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {addTodo} from '../../redux/actions/todoActions'
const Input = () => {
    const { register, handleSubmit, errors,reset } = useForm();
    const dispatch = useDispatch()
    const onSubmit = data => {
        const {todo} = data
        const id = Date.now()
        const savedData = {
            id,
            todo,
            status:'active'
        }
        dispatch(addTodo(savedData))
        reset()
    }

    return (
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <h1>Todos</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-group">
                                <input name="todo" type="text" className="form-control" id="todos" ref={register({ required: true })} placeholder="Enter todo .." />
                                {errors.todo && <span>This field is required</span>}
                            </div>
                        </form>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
    );
};

export default Input;