import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Welcome = () =>
{
    const history=useHistory();
    const token=localStorage.getItem("token");
    console.log(token);
    let loggedIn=true
    if(token == null)
    {
        loggedIn=false;
    }
    else
    {
        loggedIn=true;
    }
    if(loggedIn === false)
    {
        return history.push("/")
    }
    loggedIn=true;
    return(
        <div>
            <h1> Welcome Foody</h1>
            <nav>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Logout">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Welcome;