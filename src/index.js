import React from 'react';
import css from './style.css';
import {render} from 'react-dom';
import Main from './components/Main';
import Single from  './components/Single';
import {BrowserRouter, Route} from 'react-router-dom';


const Root = function() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/search/:searchTerm" component={Main} />
        <Route path="/beer/:beerId/:beerSlug" component={Single} />
      </div>
    </BrowserRouter>
  );
};
render(<Root />,document.querySelector("#root"));