import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './ItemDetails.css';

const Round = ({ item, label, value }) => {
    return <li className="list-group-item">{label}: {item[value]}</li>;
}

export {
    Round
}

class ItemDetails extends Component {

    state = {
        item: {},
        loading: false
    }

    componentDidUpdate(prevProps) {
        const { id ,getData } = this.props;
        if( prevProps.id === id ) {
            return false;
        } else {
            getData(id)
                .then(this.setState({
                    loading: true
                }))
                .then(item => this.setState({
                    item,
                    loading: false
                }));
        }
    }

    render() {
        const { item } = this.state;
        const { id, name } = item;
        const { form } = this.props;
        if( this.state.loading  ) return <Loader />;
        if( id === undefined ) return <span>Select the item</span>;
        return (
            <div className="card item-details">
                <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${form}/${id}.jpg`} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    onLoading = () => {
        this.setState({
            loading: true
        })
    }

}

export default ItemDetails;