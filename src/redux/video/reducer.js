export default function (state = {
    video:""
}, action) {
    let nextState = state
    switch (action.type) {
        case 'video':
            return Object.assign({}, state, {
                video: action.value
            });
            break;
        default:
            nextState = state;
            return nextState
    }
}
