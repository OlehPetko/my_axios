import './App.css';
import {connect} from "react-redux";
import Board from "./Board";
import {Button, Container} from "reactstrap";

function App(props) {
    return (
         <Container>
             <Button onClick={props.addCard}>add</Button>
                    <Board cards={props.cards} columns={props.columns}/>
         </Container>

        );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),

})
export default connect(mapStateToProps, mapDispatchToProps)(App)
