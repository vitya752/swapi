import React, { Component } from 'react';
import Loader from './../Loader/Loader';
import withSwapiService from './../hoc/withSwapiService';
import './ItemsList.css';

class ItemsListContainer extends Component {

    state = {
        itemsList: [],
        loading: true,
        next: null,
        loadingMore: true
    };

    componentDidMount() {
        const { getData } = this.props;
        this.updateItems(getData);
    }

    render() {
        const { itemsList, loading, next, loadingMore } = this.state;
        const { onItemSelect, getMore } = this.props;
        const items = itemsList.map(({ id, name }) => {
            return <CreateItem key={id} id={id} name={name} onItemSelect={onItemSelect} />;
        });
        const renderContent = loading ? <Loader /> : items;
        const loadMore = <LoadMore updateItems={this.updateItems} getMore={getMore} loadingMore={loadingMore} />;
        const viewLoadMore = next === null ? null : loadMore;
        return (
            <ItemsList renderContent={renderContent} viewLoadMore={viewLoadMore} />
        );
    }

    updateItems = (getData) => {
        const { itemsList, next } = this.state;
        getData(next)
            .then(this.setState({
                loadingMore: true
            }))
            .then(({result, next}) => {
                this.setState({
                    itemsList: [...itemsList, ...result],
                    loading: false,
                    next: next,
                    loadingMore: false
                })
            });
    }

}

const CreateItem = ({ id, name, onItemSelect }) => {
    return (
        <li
            className="list-group-item"
            onClick={() => onItemSelect(id)}>
            {name} ({id})
        </li>
    )
}

const LoadMore = ({ updateItems, getMore, loadingMore }) => {
    return(
        <button 
            type="button" 
            className="btn btn-primary btn_loadmore"
            onClick={() => updateItems(getMore)}>
            {
                loadingMore ? <Loader /> : "Load More" 
            }
        </button>
    )
}

const ItemsList = ({ renderContent, viewLoadMore }) => {
    return(
        <div className="card items-list">
            <ul className="list-group list-group-flush">
                { renderContent }
            </ul>
            { viewLoadMore }
        </div>
    )
}

export default withSwapiService()(ItemsListContainer);