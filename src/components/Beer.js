import React from 'react';
import slug from'slugify';
import {NavLink} from 'react-router-dom';

class Beer extends React.Component{
    render(){
        const {name,labels,id} = this.props.details;
        const image = labels? labels.medium :'notfound.jpg';
        return(
            <div className="beer">
            <NavLink to={`/beer/${id}/${slug(name)}`}>
            <h2>{name}</h2>
            <img src={image } alt={name}/>
            </NavLink>
            </div>
            );
    }
}

export default Beer;
