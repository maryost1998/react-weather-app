import React from "react";
import "./navbar.css";

export default function Navbar() {
    return (
        // <nav class="navbar" style="background-color: #245890">
        <nav className="navbar">
            <div className="container-fluid">
                <a
                    href="https://www.shecodes.io/"
                    className="navbar-brand"
                    id="title-nav"
                >
                    SheCodes weather
                </a>
                <form
                    className="d-flex col-5 form-control-sm"
                    role="search"
                    id="search-form"
                >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        id="search-value"
                    />
                    <button
                        className="btn btn-light btn-sm"
                        type="submit"
                        id="search-button"
                    >
                        Search
                    </button>
                </form>

                <button type="button" className="btn btn-dark" id="current-location">
                    CurrentLocation
                </button>
            </div>
        </nav>
    );
}
