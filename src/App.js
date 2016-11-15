import React from 'react';
import Select from 'react-select';
import { browserHistory } from 'react-router';

var App = React.createClass({
  getInitialState() {
    return {
      calc: '',
      select: [
        { value: '', label: '-'},
        { value: 'abv', label: 'Determine ABV' },
        { value: 'plato-sg', label: 'Convert Plato and SG' }
      ]
    };
  },
  changeCalc(val) {
    this.setState({ calc: val.value });
    const path = `/${val.value}`;
    browserHistory.push(path);
    console.log(path);
  },
  render() {
    return (
      <div className="calcs">
        <h1>Brew Calcs</h1>
        
        <Select
          name="brew-calc-select"
          value={this.state.calc}
          options={this.state.select}
          onChange={this.changeCalc}
        />
        {/*<ul role="nav">
          <li><Link to="/abv">ABV</Link></li>
          <li><Link to="/plato-sg">Plato &ndash; SG</Link></li>
        </ul>*/}

        {this.props.children}
      </div>
    );
  }
});
// }

export default App;
