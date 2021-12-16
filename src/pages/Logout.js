import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Logout extends Component{
    constructor(props){
        super(props)
   console.log(localStorage.getItem("token"))
    localStorage.removeItem("token");
    }
    render(){
    return (
        <div>
           <h1>You Have Been Logout!!!</h1>
           <nav>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Login">Login Again</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )}
}

