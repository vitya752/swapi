import React from 'react';
import Page from './Page';
import withSwapiService from './../hoc/withSwapiService';

const PeoplePage = ({ swapiService }) => {
    const {
        getPerson,
        getAllPeople
    } = swapiService;

    const rounds = [
        { label: "Birth year", value: "birthYear" },
        { label: "Eye color", value: "eyeColor" },
        { label: "Gender", value: "gender" },
        { label: "Height", value: "height" }
    ];

    return <Page getData={getPerson} getAllData={getAllPeople} rounds={rounds} form={"characters"}  />
}

export default withSwapiService()(PeoplePage);