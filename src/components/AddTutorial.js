import React, { Component } from 'react'
import '../components/AddTutorial.css'

export default class AddTutorial extends Component {
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
                ;<section
                    className="  py-0 pb-0"
                    style={{ top: "50%", left: "50%", transform: "translate(18%,0%)" }}
                >
                    <section className="row ">
                        <section className="col-12 col-lg-7 col-md-8 py-5 px-5">
                            <form className="form-container ">
                                <div className="text-center">
                                    <h2>Tutorial</h2>
                                </div>
                                <div className="form-group py-3 container">
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
                                <div
                                    className="form-group py-1 container mb-4"
                                    style={{ fontSize: "larger" }}
                                >
                                    <label htmlFor="exampleInputEmail1">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Description"
                                    />
                                </div>
                                <h5 style={{ textAlign: "center" }} className="py-3">
                                    <b>Status : </b>Pending
                                </h5>
                                <div className="text-center px-4">
                                    <button type="button" className="btn btn-primary mt-1 ">
                                        <b>Publish</b>
                                    </button>
                                    <button type="button" className="btn btn-danger mt-1 mx-3">
                                        <b>Delete</b>
                                    </button>
                                    <button type="button" className="btn btn-success mt-1">
                                        <b>Update</b>
                                    </button>
                                    {/* <a href="#" class="hero-btn1 px-3" onclick=" " class="example" ><b>Submit</b></a> */}
                                </div>
                            </form>
                        </section>
                    </section>
                </section>

            </>
        )
    }
}