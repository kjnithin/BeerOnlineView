import React from 'react';
import Header from './Header';
import Loader from './Loader';



class Single extends React.Component{
    constructor(){
        super();
        this.state ={ beer: {}, loading: true };
    }

     componentWillMount(){
        this.loadBeer(this.props.match.params.beerId);
    }

    loadBeer = (beerId) => {
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ beer: res.data, loading: false });
      });
  }

    renderGlass = (beer) => {
    if (!beer.glass) return;
    return (
      <div className="glass">
        <img src={`/images/glass-${beer.glass.id}.jpg`} alt={beer.name} />
        <h3>{beer.glass.name} Glass</h3>
      </div>
    );
  }

  renderAbv = (beer) => {
    if (!beer.abv) return;
    return (
      <div className="abv">ABV: {beer.abv}%</div>
    );
  }

    render(){
        if(this.state.loading){
            return <Loader message="Pouring a cold one!" />
        }

        const {beer} = this.state;
        const beerName = beer.style ? beer.style.name : beer.name;
        const beerDescription = beer.style ? beer.style.description : beer.description;

        return(
            <div>
            <Header siteName="Online Beer"/>
            <div className="single-beer">
            <div className="decs">
                <h2>{beer.name}</h2>
                <p>{beer.description}</p>
                </div>

                <img className="label" src={beer.labels.large} alt="beer "/>
                <div className="deets">
                    {this.renderGlass(beer)}
                    {this.renderAbv(beer)}
                 </div>

                 <div className="style">
                    <h3>More Info on {beerName}</h3>
                    <p>{beerDescription}</p>
                 </div>
               </div>
               </div>
            );
    }
}

export default Single;
