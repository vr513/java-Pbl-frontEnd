import '../components/style.css'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class Header extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {

        }
        this.userLogout = this.userLogout.bind(this);
    }
    userLogout() {
        localStorage.removeItem("token");
        window.location = "/Login"
    }
    render() {
        return (
            <>
                <div
                    className=""
                >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-4 px-5 ">
                        <div className="container ">

                            <Link to='/' style={{ fontSize: 37 }} className="navbar-brand" >ITW PBL</Link>
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

                                        <Link className="nav-link active" to='/'>
                                            Team
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link className="nav-link active" to='/Tut'>
                                            Tutorial
                                        </Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link className="nav-link active" to='/addTut'>
                                            add
                                        </Link>
                                    </li>
                                    {(localStorage.getItem('token') === (undefined || null)) ? (
                                        <li className="nav-item">

                                            <Link className="nav-link active" to='/Login'>
                                                Login
                                            </Link>
                                        </li>
                                    ) : ""}
                                    {(localStorage.getItem('token') === (undefined || null)) ? ("") : (
                                        <li className="nav-item" onClick={this.userLogout}>

                                            <Link className="nav-link active" to='/'>
                                                Logout
                                            </Link>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    }
}