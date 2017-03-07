import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainAppContainer from './containers/MainAppContainer';

import Home from './component/home/Home';
import Upload from './component/upload/UploadContainer';
import Video from './component/video/VideoContainer';
import WordQuiz from './component/wordQuiz/QuizContainer';


export default (
    <Route path="/" component={MainAppContainer}>
        <IndexRoute component={Home}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/video" component={Video}/>
        <Route path="/quiz" component={WordQuiz}/>
    </Route>
);
