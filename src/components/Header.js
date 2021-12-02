import '../components/style.css'

import React, { Component } from 'react'

export default class Header extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div
                    className=""
                >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-4 px-5 ">
                        <div className="container ">
                            <a style={{ fontSize: 37 }} className="navbar-brand" href="/">
                                ITW PBL
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse nav-links "
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">
                                            Team
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/Tut">
                                            Tutorial
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/addTut">
                                            Add
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    }
}