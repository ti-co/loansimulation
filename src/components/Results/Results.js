import React from 'react';
import './Results.css';

class Results extends React.Component {
    render() {
        return (
            <div className="results">
                <div className="row">
                    <h4 style={{marginLeft: "-3rem", width: "9%"}}>Nr</h4>
                    <h4>Te Betalen</h4>
                    <h4>Intrest</h4>
                    <h4>Kapitaal</h4>
                    <h4>Saldo</h4>
                </div>
                {
            this.props.results.map( result => {
                return (
                    <div className="row" key="result.id">
                        <p style={{marginLeft: "-3rem", width: "9%"}}>{result.nr}</p>
                        <p>{result.teBetalen}</p>
                        <p>{result.intrest}</p>
                        <p>{result.kapitaal}</p>
                        <p>{result.saldo}</p>
                    </div> 
                )})
                }     
            </div>
        )
    }
}

export default Results ; 