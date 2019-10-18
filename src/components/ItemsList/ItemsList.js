import React, { Component } from 'react';
import Loader from './../Loader/Loader';
import withSwapiService from './../hoc/withSwapiService';
import './ItemsList.css';

class ItemsList extends Component {

    state = {
        itemsList: [],
        loading: true
    };

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then(body => {
                this.setState({
                    itemsList: body,
                    loading: false
                })
            });
    }

    render() {
        const { itemsList, loading } = this.state;
        const { onItemSelect } = this.props;
        const renderItems = itemsList.map(({ id, name }, idx) => {
            return (
                <li 
                    key={idx} 
                    className="list-group-item"
                    onClick={() => onItemSelect(id)}>
                    {name} ({id})
                </li>
            )
        });
        const renderContent = loading ? <Loader /> : renderItems;
        return (
            <div className="card items-list">
                <ul className="list-group list-group-flush">
                    { renderContent }
                </ul>
            </div>
        );
    }

}

export default withSwapiService()(ItemsList);