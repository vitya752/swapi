import React, { Component } from 'react';
import Loader from './../Loader/Loader';
import withSwapiService from './../hoc/withSwapiService';
import './ItemsList.css';

class ItemsList extends Component {

    state = {
        itemsList: [],
        loading: true,
        next: null
    };

    componentDidMount() {
        const { getData } = this.props;
        this.updateItems(getData);
    }

    render() {
        const { itemsList, loading, next } = this.state;
        const { onItemSelect, getMore } = this.props;
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
        const loadMore = (
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => this.updateItems(getMore)}>Load more</button>
        );
        const viewLoadMore = next === null ? null : loadMore;
        return (
            <div className="card items-list">
                <ul className="list-group list-group-flush">
                    { renderContent }
                </ul>
                { viewLoadMore }
            </div>
        );
    }

    updateItems = (getData) => {
        const { itemsList, next } = this.state;
        getData(next)
            .then(({result, next}) => {
                this.setState({
                    itemsList: [...itemsList, ...result],
                    loading: false,
                    next: next
                })
            });
    }

}

export default withSwapiService()(ItemsList);