import React, { Component } from 'react'
import { baseApi } from '../App';

export default class Login extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginButtonText: "Login",
            isButtonDisabled: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleLogin(evt) {
        evt.preventDefault();
        this.setState({
            loginButtonText: "Logging in.....",
            isButtonDisabled: true
        });
        let url = "auth";
        url = baseApi + url;
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
            headers: headersList
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            localStorage.setItem("token", data);
            window.location = "/Tut";
            console.log("Success")
        })
        this.setState({
            loginButtonText: "Login",
            isButtonDisabled: false
        })

    }
    render() {
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
                                    <h2>User Login</h2>
                                </div>
                                <div className="form-group py-3 container">
                                    <label htmlFor="exampleInputEmail1" style={{ fontSize: "larger" }}>
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your Username"
                                        name="username"
                                        onChange={this.handleChange}
                                        value={this.state.username}
                                    />
                                </div>
                                <div
                                    className="form-group py-1 container mb-4"
                                    style={{ fontSize: "larger" }}
                                >
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your Password"
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                    />
                                </div>
                                <div className="text-center px-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary mt-1"
                                        disabled={this.state.isButtonDisabled}
                                        onClick={this.handleLogin}
                                    >
                                        <b>{this.state.loginButtonText}</b>
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