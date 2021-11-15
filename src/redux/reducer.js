const initialState = {
    cards: [
        {_id: Math.random(), name: 'Task1', status: 'todo', priority: 1},
        {_id: Math.random(), name: 'Task2', status: 'progress', priority: 1},
        {_id: Math.random(), name: 'Task3', status: 'review', priority: 1},
        {_id: Math.random(), name: 'Task',  status: 'done', priority: 1}
    ],
    columns: [
        {status: 'todo'},
        {status: 'progress'},
        {status: 'preview'},
        {status: 'done'}
    ]
}
const kanban = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, {_id: Math.random(), name: 'Task4', status: 'todo', priority: 1}]
            }
        case 'DELETE_CARD':
            const newCard = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards: newCard
            }
        default: return state
    }


}
export default kanban