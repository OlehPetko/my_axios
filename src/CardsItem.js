import './App.css';
import {connect} from "react-redux";
import {Button, Card, CardBody, CardFooter, CardSubtitle, CardTitle, Col} from "reactstrap";
import {cardDeleteById} from "./redux/actions";

function CardsItem(props) {
    const {card} = props
    const {name, priority, _id, status} = card

    return (
        <div>
            <Card>
                <CardBody>
                    <Col>
                        <CardTitle>
                            {name}
                        </CardTitle>
                        <CardSubtitle>
                            {status}
                        </CardSubtitle>
                        {priority}
                    </Col>
                </CardBody>
                <CardFooter>
                    <Button onClick={() => props.delete(_id)}>delete</Button>
                    <Button>left</Button>
                    {status !== 'done' && <Button onClick={() => props.moveRight(_id)}>right</Button>}
                </CardFooter>
            </Card>
        </div>
    );}
const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    delete: (cardId) => dispatch(cardDeleteById(cardId)),
    moveRight: (cardId) => dispatch({type: 'MOVE_RIGHT', payload: cardId})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsItem);
