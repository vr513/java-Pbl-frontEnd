import React, { Component } from 'react'
import { baseApi } from '../App';

export default class MyTut extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            courseNumber: "",
            id: null,
            description: null,
            title: null,
            loading: true
        }

    }
    componentDidMount() {
        let CourseNumber = window.location.href;
        CourseNumber = CourseNumber.slice(-1)
        this.setState({
            courseNumber: CourseNumber
        })
        this.getTutorials()
    }
    async getTutorials() {
        let url = "courses";
        url = baseApi + url;
        let headersList = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
        let options = {
            method: "GET",
            headers: headersList,
        };
        const res = await fetch(url, options);
        const data = await res.json();
        let newData = JSON.stringify({
            data
        });
        let newObj = JSON.parse(newData);
        newObj = newObj.data;
        newObj.shift();
        this.setState({
            id: newObj[this.state.courseNumber].id,
            description: newObj[this.state.courseNumber].description,
            title: newObj[this.state.courseNumber].title,
            loading: false
        })
    }
    render() {
        if (
            localStorage.getItem('token') === (undefined ||
                null)
        ) {
            alert("You are not authorised to be here . Please Login or Signup");
            localStorage.setItem("token", undefined);
            localStorage.removeItem("token");
            return window.location = "/Login";
        } else {
            return (
                <>
                    {this.state.loading ? " " : (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div
                                        className="mt-5 px-4 py-5"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.356)" }}
                                    >
                                        <h2 style={{ color: "white" }} className="pb-4">
                                            <b>
                                                <u>Courses</u>
                                            </b>
                                        </h2>
                                        <h3 style={{ color: "white" }} className="pb-2">
                                            <b>Title :</b> {this.state.title}
                                        </h3>
                                        <h3 style={{ color: "white" }} className="pb-2">
                                            <b>Description :</b> {this.state.description}
                                        </h3>
                                        <h3 style={{ color: "white" }} className="pb-2">
                                            <b>Course Id : </b>{this.state.id}
                                        </h3>
                                        <button type="button" className="btn btn-warning mt-1">
                                            <b>Edit</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </>
            )
        }

    }
}