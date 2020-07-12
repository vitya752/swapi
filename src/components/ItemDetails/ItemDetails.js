import React, { Component, Fragment } from 'react';
import Loader from '../Loader/Loader';
import './ItemDetails.css';

const Round = ({ item, label, value }) => {
    return <li className="list-group-item">{label}: {item[value]}</li>;
}

export {
    Round
}

class ItemDetailsContainer extends Component {

    state = {
        item: {},
        loading: false
    }

    componentDidMount = () => {
        if( window.innerWidth > 767 ) {
            window.addEventListener('scroll', function() {
                const itemDetails = document.getElementById('item-details');
                if( itemDetails ) {
                    itemDetails.style.top = `${window.pageYOffset}px`;
                }
            });
        }
    }

    componentDidUpdate(prevProps) { //shallComponentUpdate на деле использовать надо было
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
        const renderDetails = this.state.loading ? 
            <Loader /> : id === undefined ? 
            <span>Select the item</span> : 
            <ItemDetails 
                id={id} 
                name={name} 
                form={form} 
                item={item}
                children={this.props.children} />
        return (
            <div id="item-details" className="card item-details">
                { renderDetails }
            </div>
        );
    }

    onLoading = () => {
        this.setState({
            loading: true
        })
    }

}

const ItemDetails = ({ id, name, form, item, children }) => {
    return (
        <Fragment>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${form}/${id}.jpg`} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}

export default ItemDetailsContainer;