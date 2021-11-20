import axios from "axios";

export function cardDeleteById(cardId) {
    return (dispatch) =>{
    axios({
        metod:'DELETE',
        url: `https://nazarov-kanban-server.herokuapp.com/card/${cardId}`
    }).then(res => console.log(res,'ok'))
        .catch(eror => console.log(eror, 'error'))
    }
}