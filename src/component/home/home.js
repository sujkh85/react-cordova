import React from 'react';
import imgUrl from '../../../resources/images/home.jpg';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <div className='home-title'></div>
                <div className='home-flex-container'>
                    <div className='home-img-container'>
                        <img className='home-img' src={imgUrl}/>
                    </div>
                </div>
            </div>
        )
    }
}
