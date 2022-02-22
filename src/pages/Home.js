import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delUserStart, loadUsersStart } from "../redux/actions";
import { Table} from "reactstrap";
import Icon from "react-icons-kit";
import { trash } from 'react-icons-kit/feather/trash'
import { edit } from 'react-icons-kit/feather/edit'
import { eye } from 'react-icons-kit/feather/eye'
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { MDBSpinner } from "mdb-react-ui-kit";
import "../styles.css"

const Home = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { users,loading,error } = useSelector((state) => state.data);
    
    
   
     useEffect(() => {
        dispatch(loadUsersStart())
    },[]);
    useEffect(() => error && toast.error(error), [error]);

    if (loading){
        return(
            <MDBSpinner style={{marginTop:"150px"}} role="status" >
                    <span className="visually-hidden">
                    Loading....
                    </span>
            </MDBSpinner>
        )
    }
    const deleteData = (id) => {
        if(window.confirm("Are You sure to delete the User?")){
            dispatch(delUserStart(id));
            toast.success(" User Deleted Successfully");
           }    
    };

   

    return (
        <div>
          
            <Table style={{ "borderWidth": "2px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                <thead>
                    <tr>
                        <th colSpan={4}></th>
                        <th colSpan={3}>
                            <nav>
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/UpdateUser">Add New Data</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </th>
                    </tr>
                    <tr style={{backgroundColor:"grey"}}>
                        <th><b>No.</b> </th>
                        <th><b>Name</b> </th>
                        <th><b>Email</b> </th>
                        <th><b>Mobile Number</b> </th>
                        <th colSpan={3}><b>Action</b> </th>
                    </tr>
                </thead>

                {users && users.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mno}</td>
                            <td><a className="Tooltip" title="Delete" >
                                <Icon icon={trash} style={{ color: "#dd4b39" }} onClick={() => { deleteData(item.id) }} />
                                </a></td>
                            <td><a className="Tooltip" title="Edit">
                                <Icon icon={edit} style={{ color: "55acee "}}  onClick={() => history.push(`/UpdateUser/${item.id}`)} />
                                </a> </td>
                            <td><a className="Tooltip" title="Show">
                                <Icon icon={eye} style={{ color: "3b5998 "}}  onClick={() => history.push(`/UserInfo/${item.id}`)} />
                                </a></td>

                        </tr>
                    </tbody>
                ))
                }

            </Table>
        </div>
    )
}

export default Home;