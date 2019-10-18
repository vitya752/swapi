import React from 'react';
import Page from './Page';
import withSwapiService from './../hoc/withSwapiService';

const StarshipsPage = ({ swapiService }) => {
    const {
        getStarship,
        getAllStarships
    } = swapiService;

    const rounds = [
        { label: "Model", value: "model" },
        { label: "Cost", value: "cost" },
        { label: "Length", value: "length" }
    ];

    return <Page getData={getStarship} getAllData={getAllStarships} rounds={rounds} form={"starships"}  />
}

export default withSwapiService()(StarshipsPage);