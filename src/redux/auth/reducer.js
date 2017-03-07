export default function (state = {
    auth:""
}, action) {
    let nextState = state
    switch (action.type) {
        case 'auth':
            return Object.assign({}, state, {
                auth: action.value
            });
            break;
        default:
            nextState = state;
            return nextState
    }
}
