import React from 'react';
import Header from './Header';
import Results from './Results';
// import Search from './Search';
import Loader from './Loader';

class Main extends React.Component{
    constructor(){
        super();
        this.state={
            numBeers : 10,
            beers:[],
            loading:true
        }
    }

    loadBeers = (searchTerm = 'hops') => {
        this.setState({loading:true});

        fetch (`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
            .then(data=>data.json())
            .then((beers)=>{
                const filteredBeers =beers.data.filter(beer => !!beer.labels);
                this.setState({beers:filteredBeers,loading:false});
            })
            .catch(err=>console.log(err));
    }

     componentWillMount(){
        this.loadBeers();
     }

    incrementBeers =() =>{
        const beerAmount = this.state.numBeers+1;
        this.setState({numBeers:beerAmount});
    }

    render(){
        if(this.state.loading){
            return <Loader message="Loading" />
        }
        return(
        <div className="wrapper">
        <Header siteName="Online Beer"/>
        <search />
        <Results beers={this.state.beers} />
        </div>
        );
    }
};

export default Main;
