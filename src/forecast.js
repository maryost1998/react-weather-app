import React from "react";
import "./forecast.css";

export default function Prediction() {
    return (
        <div className="weather-prediction" id="forecast">
            <div className="row">
                <div className="col">
                    <h3>Saterday</h3>
                    <img src={require('./imges/clouds.png')} className="item-img" alt="clouds" />
                    <h4>16 °C</h4>
                </div>
                <div className="col">
                    <h3>Sunday</h3>
                    <img src={require('./imges/sun.png')} className="item-img" alt="sun" />
                    <h4>12 °C</h4>
                </div>
                <div className="col">
                    <h3>Monday</h3>
                    <img src={require('./imges/clouds.png')} className="item-img" alt="sun" />
                    <h4>10°C</h4>
                </div>
                <div className="col">
                    <h3>Tuesday</h3>
                    <img src={require('./imges/clouds.png')} className="item-img" alt="sun" />
                    <h4>10 °C</h4>
                </div>
            </div>
        </div>
    );
}
