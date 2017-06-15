import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{


    render (){
        return(

            <h1>{this.props.siteName}</h1>

            );
    }
}

Header.PropTypes={
    siteName:PropTypes.string.isRequired
}

export default Header;