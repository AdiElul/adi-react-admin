import React from 'react';
import './Bday.css';

class Bday extends React.Component {
  render() {
    return (
        <div>
            <div className="cake">
                <div className="plate"></div>
                <div className="layer layer-bottom"></div>
                <div className="layer layer-middle"></div>
                <div className="layer layer-top"></div>
                <div className="icing"></div>
                <div className="drip drip1"></div>
                <div className="drip drip2"></div>
                <div className="drip drip3"></div>
                <div className="candle">
                    <div className="flame"></div>
                </div>
            </div>

            <div className="container">
                <div className="balloon"><div> <span>☺</span></div>
                <div><span>B</span></div>
                <div><span>D</span></div>
                <div><span>A</span></div>
                <div><span>Y</span></div>
                <div><span>!</span></div>
                </div>
                <h1>Happy Birthday Shahar! :)</h1>
            </div>
        </div>
    );
  }
}

export default Bday;
