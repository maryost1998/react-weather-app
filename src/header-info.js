import React from "react";
import "./header-info.css";

export default function Header() {
    return (
        <div className="main-header">
            <h1 id="city">Shiraz</h1>
            <img
                src={require('./imges/sun.png')}
                alt="sunny"
                className="title-img"
                id="icon-main-city"
            />

            <h2 id="current-day">Friday</h2>
            <h3 id="time">12:20</h3>

            <h3 id="weather-condition-header">Partly Cloudy</h3>
            <h4 id="degree">16</h4>
            <span id="cele">°C</span>
        </div>
    );
}
