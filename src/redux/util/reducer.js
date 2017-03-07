export default function (state = {
    util:""
}, action) {
    let nextState = state
    switch (action.type) {
        case 'util':
            return Object.assign({}, state, {
                util: action.value
            });
            break;
        default:
            nextState = state;
            return nextState
    }
}
