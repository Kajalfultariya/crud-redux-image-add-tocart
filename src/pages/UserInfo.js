import React from "react";
import { useHistory , useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";

const UserInfo = () => {
    const {users}= useSelector(state=>state.data);
    const {id} =useParams();
    const history=useHistory();
    const singleUser=users.find(item => item.id === Number(id));
    return (
       <div style={{marginTop:"10px"}}>
           <div className="row" 
                style={{margin:"auto" , padding:"15px" , maxWidth:"450px"}}>
                <p className="col-md-12 fs-3">User Detail              </p>
                <hr/>
                <p className="col-md-6 fw-bold">Id : </p>
                <p className="col-md-6">{singleUser.id}</p>

                <p className="col-md-6 fw-bold">Name : </p>
                <p className="col-md-6">{singleUser.name}</p>

                <p className="col-md-6 fw-bold">Email : </p>
                <p className="col-md-6">{singleUser.email}</p>

                <p className="col-md-6 fw-bold">Password : </p>
                <p className="col-md-6">{singleUser.pwd}</p>

                <p className="col-md-6 fw-bold">Mobile number : </p>
                <p className="col-md-6">{singleUser.mno}</p>

                <p className="col-md-6 fw-bold">Qualification : </p>
                <p className="col-md-6">{singleUser.qur}</p>

                <p className="col-md-6 fw-bold">Address : </p>
                <p className="col-md-6">{singleUser.addr}</p>
           </div>
           <MDBBtn onClick={()=> history.push("/")} color="danger" > Go Back</MDBBtn>
       </div>
    )
}

export default UserInfo;