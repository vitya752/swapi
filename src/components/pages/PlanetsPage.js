import React from 'react';
import Page from './Page';
import withSwapiService from './../hoc/withSwapiService';

const PlanetsPage = ({ swapiService }) => {
    const {
        getPlanet,
        getAllPlanets,
        getMore
    } = swapiService;

    const rounds = [
        { label: "Diameter", value: "diameter" },
        { label: "Population", value: "population" },
        { label: "Rotation period", value: "rotation" }
    ];

    return <Page getData={getPlanet} getAllData={getAllPlanets} getMore={getMore} rounds={rounds} form={"planets"}  />
}

export default withSwapiService()(PlanetsPage);