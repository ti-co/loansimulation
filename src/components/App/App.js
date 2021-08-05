import React from 'react'
import Form from '../Form/Form'; 
import Results from '../Results/Results';
const Generator = require('../../util/Generator');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.simulate = this.simulate.bind(this);
  }

  simulate(amount, duration, intrestRate, date) {
    Generator.calculateRows(amount, duration, intrestRate, date);
    this.setState({results: Generator.resultsArray});
  };

  render(){
    return (
      <div className="App">
        <Form onSimulate={this.simulate} />
        <div>
        <Results
        results={this.state.results} 
        />
        </div>
      </div>
    );
  }
  
}
    
  
    
  
export default App;
