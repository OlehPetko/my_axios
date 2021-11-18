import './App.css';
import CardsItem from "./CardsItem";
import {Col} from "reactstrap";

function Column(props) {
    const {cards, column} = props

    return (
        <Col>
            {column.status}
            {cards.filter(el => column.status === el.status)
                .map(card => <CardsItem card={card}/>)}
        </Col>);
}

export default Column;
