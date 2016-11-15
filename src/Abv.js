import React from 'react';
import Beercalc from 'beercalc_js';

var Abv = React.createClass({
  componentDidMount() {
    document.title = "ABV Calculator";
  },
  getInitialState() {
    return {
      og: '',
      fg: '',
      abv: '',
      abw: '',
      cal: '',
      attenuation: ''
    };
  },
  changeOG(e) {
    this.setState({ og: e.target.value });
  },
  changeFG(e) {
    this.setState({ fg: e.target.value });
  },
  getABV(e) {
    // use more accurate abv formula
    this.setState(
      { 
        abv: "ABV: " + ((76.08 * (this.state.og-this.state.fg) / (1.775-this.state.og)) * (this.state.fg / 0.794)).toFixed(2)+"%",
        abw: "ABW: " + (Beercalc.abw(this.state.og, this.state.fg)).toFixed(2)+"%",
        cal: "Calories: " + (Beercalc.calories(this.state.og, this.state.fg)).toFixed(2)+" in 12oz",
        attenuation: "Attenuation: " + (Beercalc.attenuation(this.state.og, this.state.fg)*100).toFixed(2)+"%"
      }
    );
  },
  render() {
    return (
      <div className="Abv">
        <h2>Determine ABV</h2>
        <fieldset>
          <label htmlFor="og">Original Gravity:</label>
          <input name="og" value={this.state.og} onChange={this.changeOG} />
        </fieldset>
        <fieldset>
          <label htmlFor="fg">Final Gravity:</label>
          <input name="fg" value={this.state.fg} onChange={this.changeFG} />
        </fieldset>
        <button onClick={this.getABV}>Get ABV</button>
        <h3>{this.state.abv}</h3>
        <h3>{this.state.abw}</h3>
        <div>{this.state.cal}<br/>
          {this.state.extract}<br/>
          {this.state.attenuation}
        </div>
      </div>
    );
  }
});
// }

export default Abv;
