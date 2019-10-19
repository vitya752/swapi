import React from 'react';
import Page from './Page';
import withSwapiService from './../hoc/withSwapiService';

const StarshipsPage = ({ swapiService }) => {
    const {
        getStarship,
        getAllStarships,
        getMore
    } = swapiService;

    const rounds = [
        { label: "Model", value: "model" },
        { label: "Cost", value: "cost" },
        { label: "Length", value: "length" }
    ];

    return <Page getData={getStarship} getAllData={getAllStarships} getMore={getMore} rounds={rounds} form={"starships"}  />
}

export default withSwapiService()(StarshipsPage);