import './App.css';
import Column from "./Column";
import {Row} from "reactstrap";

function Board(props) {
const {cards, columns} = props

    return (
        <Row>
            {columns.map(column => <Column  column={column} cards={cards} />)}
        </Row>);
}

export default Board;
