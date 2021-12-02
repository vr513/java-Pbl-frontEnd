import '../components/style.css'

import React, { Component } from 'react'

export default class Body extends Component {
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
                <section
                    className="  py-0 pb-0"
                    style={{ top: "50%", left: "50%", transform: "translate(18%,2%)" }}
                >
                    <section className="row ">
                        <section className="col-12 col-lg-7 col-md-8 py-5 px-5">
                            <form className="form-container ">
                                <div className="form-group py-4 container">
                                    <label htmlFor="exampleInputEmail1" style={{ fontSize: "larger" }}>
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter The Title"
                                    />
                                </div>
                                <div className="form-group py-1 container mb-4">
                                    <label htmlFor="exampleInputEmail1" style={{ fontSize: "larger" }}>
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Description"
                                    />
                                </div>
                                <div className="text-center px-4">
                                    <a href="#" className="hero-btn1 px-3 mx-2" onclick=" ">
                                        <b>Submit</b>
                                    </a>
                                </div>
                            </form>
                        </section>
                    </section>
                </section>

            </>
        )
    }
}