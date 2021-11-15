import './App.css';
import {connect} from "react-redux";



function Panel(props) {



    return (
        <div className="App">
            <button onClick={props.addCard}>add cards</button>
            {props.columns.map(el => <div key={el.status}>{el.status}</div>)}
            {props.cards.map(el => <div key={el._id}>
                    {el.name}
                    <button onClick={() => props.delete(el._id)}>delete</button>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    delete: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})

})
export default connect(mapStateToProps, mapDispatchToProps)(Panel);
