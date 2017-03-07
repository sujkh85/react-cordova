import React from 'react';

import Header from './Header'
import HeaderTop from './HeaderTop'

export default class HeaderContainer extends React.Component {
    render(){
        return(
            <div>
                <HeaderTop {...this.props}/>
                <Header {...this.props}/>
            </div>
        )
    }
}
