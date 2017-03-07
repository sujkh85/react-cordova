export default function (state = {
    wordQuiz:""
}, action) {
    let nextState = state
    switch (action.type) {
        case 'wordQuiz':
            return Object.assign({}, state, {
                wordQuiz: action.value
            });
            break;
        default:
            nextState = state;
            return nextState
    }
}
