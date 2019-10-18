import React from 'react';
import Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import { Switch, Route } from 'react-router-dom';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from './../pages';

const App = () => {
    return(
        <div className="container">
            <Header />
            <Switch>
                <Route path="/swapi" render={
                    () => {
                        return (
                            <div>
                                <h1>Welcome to StarWars Api Service</h1>
                                <RandomPlanet />  
                            </div>      
                        )
                    }
                } exact />
                <Route path="/swapi/people" component={PeoplePage} />
                <Route path="/swapi/planets" component={PlanetsPage} />
                <Route path="/swapi/starships" component={StarshipsPage} />
            </Switch>
        </div>
    )
}

export default App;