import React, { Component }from 'react';
import Tile from './Tile';
import data from '../data';

class NumberPad extends Component{
// showButton coming from Calculator to this file and it is still going to Tile file
// But since Calculator is connected this file (NumberPad) and this file is connected to Tile.
 renderTiles() {
   return data.map((tile,i) => {
     console.log(typeof(tile.symbol))
     return (
      <Tile key={i} size={tile.size ? tile.size : ''} symbol={tile.symbol} showButton={this.props.showButton}/>
     )
   });
 }
 
 render() {
  return (
    <div className="number_pad">
      { this.renderTiles() }
    </div>
  )
 }
}

export default NumberPad;
