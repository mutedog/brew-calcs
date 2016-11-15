import React from 'react';
import Beercalc from 'beercalc_js';

var PlatoSg = React.createClass({
  componentDidMount() {
    document.title = "Convert between Plato & SG";
  },
  getInitialState() {
    return {
      sg: '',
      plato: ''
    };
  },
  changeSG(e) {
    this.setState({ sg: e.target.value });
    this.setState({ plato: '' });
  },
  changePlato(e) {
    this.setState({ plato: e.target.value });
    this.setState({ sg: '' });
  },
  getConversion(e) {
    if (this.state.sg === '' && this.state.plato === '') {
      // do nothing
    } else if (this.state.sg !== '' && this.state.plato === '') {
      // convert SG to plato with Beercalc
      this.setState({plato: (Beercalc.plato(this.state.sg)).toFixed(1)});
    } else if (this.state.sg === '' && this.state.plato !== '') {
      // convert plato to SG
      this.setState({sg: (259/(259-this.state.plato)).toFixed(4)});
    }
  },
  render() {
    return(
      <div className="PlatoSg">
        <h2>Convert Between Plato(Brix) and SG</h2>
        <fieldset>
          <label htmlFor="sg">SG:</label>
          <input name="sg" value={this.state.sg} onChange={this.changeSG} />
        </fieldset>
        <fieldset>
          <label htmlFor="plato">Plato:</label>
          <input name="plato" value={this.state.plato} onChange={this.changePlato} />
        </fieldset>
        <button onClick={this.getConversion}>Convert</button>
      </div>
    )
  }
});

export default PlatoSg;