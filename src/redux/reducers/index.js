import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
//combine reducer
import auth from '../auth/reducer';
import home from '../home/reducer';
import upload from '../upload/reducer';
import video from '../video/reducer';
import wordQuiz from '../wordQuiz/reducer';
import util from '../util/reducer';


const appReducer = combineReducers({
    auth,
    home,
    upload,
    video,
    wordQuiz,
    util,
    routing
})


const rootReducer = (state, action)=>{
    //if you need clear store
    // if(action.type === 'CLEAR_STORE'){
    //     state = undefined
    // }
    return appReducer(state, action)
}

export default rootReducer;
