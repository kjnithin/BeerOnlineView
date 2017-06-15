import React from 'react';


class Loader extends React.Component{
    render(){
        return(
            <div className='loader'>
                <img src="../images/ball.svg" alt="Loading ...." />
                <h2>{this.props.message}</h2>
            </div>
            );
    }
}

export default Loader;