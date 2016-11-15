import React from 'react';

var Abv = React.createClass({
  componentDidMount() {
    document.title = "ABV Calculator";
  },
  getInitialState() {
    return {
      og: '',
      fg: '',
      abv: ''
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
    this.setState({ abv: "ABV: " + ((76.08 * (this.state.og-this.state.fg) / (1.775-this.state.og)) * (this.state.fg / 0.794)).toFixed(2)+"%" });
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
      </div>
    );
  }
});
// }

export default Abv;
