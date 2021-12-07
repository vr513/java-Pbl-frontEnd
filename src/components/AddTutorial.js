import React, { Component } from 'react'
import { baseApi } from '../App';
import '../components/AddTutorial.css'

export default class AddTutorial extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: "",
            showAddCourseSuccessMessage: false,
            showUpdateCourseSuccessMessage: false,
            showDeleteCourseSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    async addCourse() {
        this.setState({
            showAddCourseSuccessMessage: false,
            showUpdateCourseSuccessMessage: false,
            showDeleteCourseSuccessMessage: false
        })
        let url = "courses";
        url = baseApi + url;
        let headersList = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
        let options = {
            method: "POST",
            body: JSON.stringify({
                id: this.state.id,
                description: this.state.description,
                title: this.state.title
            }),
            headers: headersList,
        };
        let response = await fetch(url, options);
        const actualData = await response.json();
        console.log(actualData);
        this.setState({
            showAddCourseSuccessMessage: true,
            id: "",
            title: "",
            description: ""
        })
    }
    async updateCourse() {
        this.setState({
            showAddCourseSuccessMessage: false,
            showUpdateCourseSuccessMessage: false,
            showDeleteCourseSuccessMessage: false
        })
        let url = "courses";
        url = baseApi + url;
        let headersList = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
        let options = {
            method: "PUT",
            body: JSON.stringify({
                id: this.state.id,
                description: this.state.description,
                title: this.state.title
            }),
            headers: headersList,
        };
        let response = await fetch(url, options);
        const actualData = await response.json();
        console.log(actualData);
        this.setState({
            showUpdateCourseSuccessMessage: true,
            id: "",
            title: "",
            description: ""
        })
    }
    async deleteCourse() {
        this.setState({
            showAddCourseSuccessMessage: false,
            showUpdateCourseSuccessMessage: false,
            showDeleteCourseSuccessMessage: false
        })
        let url = `courses/${this.state.id}`;
        url = baseApi + url;
        let headersList = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
        let options = {
            method: "DELETE",
            headers: headersList,
        };
        let response = await fetch(url, options);
        const actualData = await response.text();
        console.log(actualData);
        this.setState({
            showDeleteCourseSuccessMessage: true,
            id: "",
            title: "",
            description: ""
        })
    }
    render() {
        if (
            localStorage.getItem('token') === (undefined ||
                null)
        ) {
            alert("You are not authorised to be here . Please Login or Signup");
            localStorage.setItem("token", undefined);
            console.log("Inside func")
            localStorage.removeItem("token");
            return window.location = "/Login";
        } else {
            return (
                <>
                    <section
                        className="  py-0 pb-0"
                        style={{ top: "50%", left: "50%", transform: "translate(18%,0%)" }}
                    >
                        <section className="row ">
                            <section className="col-12 col-lg-7 col-md-8 py-5 px-5">
                                <form className="form-container ">
                                    <div className="text-center">
                                        <h2>Course</h2>
                                    </div>
                                    {this.state.showAddCourseSuccessMessage ? (
                                        <div className="alert alert-success" role="alert">
                                            <h4 className="alert-heading">Well done!</h4>
                                            <p>
                                                Course SuccessFully Added
                                            </p>

                                        </div>
                                    ) : ""}
                                    {this.state.showUpdateCourseSuccessMessage ? (
                                        <div className="alert alert-success" role="alert">
                                            <h4 className="alert-heading">Well done!</h4>
                                            <p>
                                                Course SuccessFully Updated
                                            </p>

                                        </div>
                                    ) : ""}
                                    {this.state.showDeleteCourseSuccessMessage ? (
                                        <div className="alert alert-success" role="alert">
                                            <h4 className="alert-heading">Well done!</h4>
                                            <p>
                                                Course SuccessFully Deleted
                                            </p>

                                        </div>
                                    ) : ""}

                                    <div className="form-group py-3 container">
                                        <label htmlFor="idInput" style={{ fontSize: "larger" }}>
                                            Id
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="idInput"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter The Id"
                                            name="id"
                                            onChange={this.handleChange}
                                            value={this.state.id}
                                        />
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
                                            name="title"
                                            onChange={this.handleChange}
                                            value={this.state.title}
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
                                            name="description"
                                            onChange={this.handleChange}
                                            value={this.state.description}
                                        />
                                    </div>
                                    <div className="text-center px-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary mt-1 "
                                            onClick={this.addCourse}
                                        >
                                            <b>Add Course</b>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger mt-1 mx-3"
                                            onClick={this.deleteCourse}
                                        >
                                            <b>Delete</b>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success mt-1"
                                            onClick={this.updateCourse}
                                        >
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
}