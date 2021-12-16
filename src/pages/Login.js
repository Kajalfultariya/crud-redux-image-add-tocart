import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUsersStart } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.data);
    const history = useHistory();

    useEffect(() => {
        dispatch(loginUsersStart())
    }, []);

    //token
    const token = localStorage.getItem("token");
    console.log(token);
    let loggedIn = true;
    if (token == null) {
        loggedIn = false;
    }
    else {
        loggedIn = true;
        return <Redirect to="/Welcome" />
    }




    const handleForm = (e) => {
        if (loggedIn === true) {
            return <Redirect to="/Welcome" />
        }
        e.preventDefault()
        let email = e.target.email.value;
        let pwd = e.target.pwd.value;

        console.log("eeeeeee", email);
        console.log(users);
        users.find((element => {

            console.log(element.email, element.pwd)
            console.log(email, pwd)

            if (!email || !pwd) {
                console.log("empty")
                loggedIn = false;

            }
            else if ((element.email !== email) || (element.pwd !== pwd)) {
                console.log("Invalid Details")
                loggedIn = false;
            }
            else {
                localStorage.setItem("token", "kajal1109");
                loggedIn = true;
                return history.push("./Welcome");

            }
        }))
    }


    return (
        <div>
            <Container style={{
                border: "solid 1px black", borderRadius: "1px",
                margin: "center", padding: "5px", marginTop: "20px", width: "400px"
            }}>

                <h1>Sign In</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <Label for="email" >Email</Label>
                        <Input type="email" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="pwd" />
                    </FormGroup>
                    <FormGroup style={{ textAlign: "center" }}>
                        <Button type="submit" className="btn btn-primary btn-block" >Login</Button>
                    </FormGroup>

                    <nav>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">Not User
                                <NavLink className="nav-link" exact to="/UpdateUser">Sign Up</NavLink>
                            </li>
                        </ul>
                    </nav>

                </Form>
                <h1></h1>
            </Container>

        </div>
    )
}

export default Login;