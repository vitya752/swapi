import React, { Component } from 'react';

class Row extends Component {

    state = {
        id: undefined
    }

    render() {
        const { left, right } = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    {
                        React.cloneElement(left, { onItemSelect: this.onItemSelect })
                    }
                </div>
                <div className="col-12 col-md-6 mb-3">
                    {
                        React.cloneElement(right, { id: this.state.id })
                    }
                </div>
            </div>
        );
    }
    
    onItemSelect = (id) => {
        this.setState({
            id
        })
    }

}

export default Row;