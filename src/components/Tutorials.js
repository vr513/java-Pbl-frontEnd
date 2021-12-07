import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { baseApi } from '../App';
import "../components/Tutorials.css"

export default class Tutorials extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            savedCourses: null,
            courseHeadings: null,
            loading: true,
            showDeleteCourseSuccessMessage: false
        }
        this.getTutorials = this.getTutorials.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this)
    }
    componentDidMount() {
        this.getTutorials();
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
            savedCourses: newObj
        })
        let courseTitles = [];
        for (let index = 0; index < newObj.length; index++) {
            courseTitles[index] = newObj[index].title;
        }
        this.setState({
            courseHeadings: courseTitles,
            loading: false
        })
    }
    async removeAllTutorials() {
        let url = `deleteAll`;
        url = baseApi + url;
        let headersList = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
        let options = {
            method: "GET",
            headers: headersList,
        };
        let response = await fetch(url, options);
        const actualData = await response.text();
        console.log(actualData);
        this.getTutorials();

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
                    {this.state.loading ? (
                        <h1>Loading</h1>
                    ) : <>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    {/* the left part */}
                                    <h2 style={{ color: "white" }} className="py-2">
                                        Course-List
                                    </h2>
                                    {this.state.showDeleteCourseSuccessMessage ? (
                                        <div className="alert alert-success" role="alert">
                                            <h4 className="alert-heading">Well done!</h4>
                                            <p>
                                                All Courses SuccessFully Deleted
                                            </p>

                                        </div>
                                    ) : ""}
                                    <ul className="list-group py-2">
                                        {this.state.courseHeadings.map((currentElement, index) => (
                                            <>
                                                <Link to={`/MyTut/${index}`} >
                                                    <li
                                                        className="list-group-item"
                                                        style={{ fontSize: "large" }}
                                                        key={index}
                                                    >
                                                        {currentElement}
                                                    </li>
                                                </Link>
                                            </>
                                        ))}
                                    </ul>
                                    <button
                                        type="button"
                                        className="btn btn-danger py-2 px-3"
                                        onClick={this.removeAllTutorials}
                                    >
                                        Remove all
                                    </button>

                                </div>
                            </div>
                        </div>

                    </>}

                </>
            )
        }

    }
}