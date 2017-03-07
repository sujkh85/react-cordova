export default function (state = {
    upload:""
}, action) {
    let nextState = state
    switch (action.type) {
        case 'upload':
            return Object.assign({}, state, {
                upload: action.value
            });
            break;
        default:
            nextState = state;
            return nextState
    }
}
