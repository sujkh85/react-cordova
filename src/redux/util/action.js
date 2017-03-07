import {push} from 'react-router-redux';

//sample용
export function setLocation(target){
    return dispatch => {
        dispatch({
            type: 'UTIL',
            value: target
        })
    }
}
