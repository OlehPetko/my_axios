const initialState = {
    cards: [
        {_id: Math.random(), name: 'Task1', status: 'todo', priority: 1},
        {_id: Math.random(), name: 'Task2', status: 'progress', priority: 1},
        {_id: Math.random(), name: 'Task3', status: 'review', priority: 1},
        {_id: Math.random(), name: 'Task',  status: 'done', priority: 1}
    ],
    columns: [
        {_id: Math.random(), status: 'todo'},
        {_id: Math.random(), status: 'progress'},
        {_id: Math.random(), status: 'review'},
        {_id: Math.random(), status: 'done'}
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
        case 'MOVE_RIGHT':
        const newList = state.cards.map(el => {
            if (el._id === action.payload) {
                const colStatuses = state.columns.map(el => el.status)
                return {...el, status: colStatuses[colStatuses.indexOf(el.status) + 1]}
            }else {
                return el
            }
        })
            return {
            ...state,
                cards: newList
            }
        default: return state
    }


}
export default kanban