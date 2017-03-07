import React from 'react';

export default class Header extends React.Component {
    location = ''
    movePage(e){
        let target = e.currentTarget.getAttribute('value')
        target += '/'
        if(target != this.location){
            this.location = target
            this.props.push(target)
        }
    }
    render() {
        return (
            <div className='header-container'>
                <div className='header-flux-container'>
                    <div className='header-flex-cell' value='' onClick={::this.movePage}>
                        HOME
                    </div>
                    <div className='header-flex-cell' value='video' onClick={::this.movePage}>
                        LIST
                    </div>
                    <div className='header-flex-cell' value='upload' onClick={::this.movePage}>
                        ENG
                    </div>
                    <div className='header-flex-cell' value='quiz' onClick={::this.movePage} style={{borderRight:0}}>
                        QUIZ
                    </div>
                </div>
            </div>
        )
    }
}
