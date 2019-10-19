import React from 'react';
import ItemsList from './../ItemsList/ItemsList';
import ItemDetails, { Round } from './../ItemDetails/ItemDetails';
import Row from './../Row/Row';

const Page = ({ getData, getAllData, getMore, rounds, form }) => {

    const Items = <ItemsList getData={getAllData} getMore={getMore} />;
    const Details = 
        <ItemDetails getData={getData} form={form} >
            {
                rounds.map(({ label, value }, idx) => {
                    return <Round key={idx} label={label} value={value} />
                })
            }
        </ItemDetails>;

    return (
        <Row left={Items} right={Details} />
    )
}

export default Page;