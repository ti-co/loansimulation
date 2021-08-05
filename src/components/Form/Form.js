import React from 'react';
import './Form.css';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: 100000, 
            duration: 20,
            intrestRate: 2.3, 
            date: "" 
        };
            
        this.simulate = this.simulate.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }
      
    simulate(event){
        this.props.onSimulate(this.state.loanAmount, this.state.duration, this.state.intrestRate, this.state.date);
        event.preventDefault();
    }

    handleAmountChange(event) {
        this.setState({loanAmount: event.target.value});         
    }

    handleDurationChange(event) {
        this.setState({duration: event.target.value});         
    }

    handleRateChange(event) {
        this.setState({intrestRate: event.target.value});         
    }
    
    handleDateChange(event) {
        this.setState({date: event.target.value});         
    }

    render () {
        return (
            <div className="Form">
                <div className="inputRow">
                    <label htmlFor='loanAmount'>Ontleende bedrag:  </label>
                    <input id='loanAmount' onChange={this.handleAmountChange} placeholder="100.000" />
                </div>
                <div className="inputRow">
                    <label htmlFor='duration'>Terugbetaaltijd in jaren: </label>
                    <input id='duration' onChange={this.handleDurationChange} placeholder="20" />
                </div>
                <div className="inputRow">
                    <label htmlFor='intrestRate'>Rentevoet in %: </label>
                    <input id='intrestRate' onChange={this.handleRateChange} placeholder="2.3" />
                </div>
                <div className="inputRow">
                    <label htmlFor='startDate'>Startdatum: </label>
                    <input id='startDate' onChange={this.handleDateChange} placeholder="DDMMYYYY" />
                </div>
                <button className="SearchButton" onClick={this.simulate} >Generate Payment Plan</button>
            </div>
        );
    }
}

export default Form