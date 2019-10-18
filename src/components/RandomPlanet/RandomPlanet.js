import React, { Component } from 'react';
import ItemDetails, { Round } from './../ItemDetails/ItemDetails';
import withSwapiService from './../hoc/withSwapiService';

class RandomPlanet extends Component {

    state = {
        id: null
    }

    componentDidMount() {
        this.updateId();
        this.interval = setInterval( this.updateId, 5000 );
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    render() {
        const { getPlanet } = this.props.swapiService;
        const rounds = [
            { label: "Diameter", value: "diameter" },
            { label: "Population", value: "population" },
            { label: "Rotation period", value: "rotation" }
        ];

        return(
            <ItemDetails id={this.state.id} getData={getPlanet} form={"planets"} >
                {
                    rounds.map(({ label, value }, idx) => {
                        return <Round key={idx} label={label} value={value} />
                    })
                }
            </ItemDetails>
        ); 
    }

    updateId = () => {
        const randomId = Math.floor(Math.random()*25)+3;
        this.setState({
            id: randomId
        })
    }

}

export default withSwapiService()(RandomPlanet);