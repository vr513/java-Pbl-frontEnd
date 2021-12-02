import React, { Component } from 'react'
import "../components/Tutorials.css"

export default class Tutorials extends Component {
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
                ;<div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            {/* the left part */}
                            <h2 style={{ color: "white" }} className="py-2">
                                Tutorials-List
                            </h2>
                            <ul className="list-group py-2">
                                <li className="list-group-item " style={{ fontSize: "large" }}>
                                    list item one
                                </li>
                                <li className="list-group-item" style={{ fontSize: "large" }}>
                                    List item two
                                </li>
                                <li className="list-group-item" style={{ fontSize: "large" }}>
                                    the next item
                                </li>
                                <li className="list-group-item" style={{ fontSize: "large" }}>
                                    next next item
                                </li>
                                <li className="list-group-item" style={{ fontSize: "large" }}>
                                    next next next item
                                </li>
                            </ul>
                            <button type="button" className="btn btn-danger py-2 px-3">
                                Remove all
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="mt-5 px-4 py-5"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.356)" }}
                            >
                                <h2 style={{ color: "white" }} className="pb-4">
                                    <b>
                                        <u>Tutorial</u>
                                    </b>
                                </h2>
                                <h3 style={{ color: "white" }} className="pb-2">
                                    <b>Title :</b> Spring Boot Rest Apis Tut #0
                                </h3>
                                <h3 style={{ color: "white" }} className="pb-2">
                                    <b>Description :</b> Tut#0 Description
                                </h3>
                                <h3 style={{ color: "white" }} className="pb-2">
                                    <b>Status : </b>Pending
                                </h3>
                                <button type="button" className="btn btn-warning mt-1">
                                    <b>Edit</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}