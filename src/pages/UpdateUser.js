import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserStart, editUserStart } from "../redux/actions";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    pwd: "",
    mno: "",
    qur: "",
    addr: ""
}

const UpdateUser = () => {

    const [records, setRecords] = useState(initialState);
    const { name, email, pwd, mno, qur, addr } = records; //for destructor
    const history = useHistory();
    const dispatch = useDispatch();

    //edit data
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const { users } = useSelector(state => state.data);
    useEffect(() => {
        if (id) {
            setEditMode(true);
            const singleUser = users.find(item => item.id === Number(id));
            setRecords({ ...singleUser });
        }
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && pwd && mno && qur && addr) //add record
        {
            if (!editMode) {
                //add Record
                dispatch(addUserStart(records));
                toast.success("User Added Successfully");
                setTimeout(() => history.push("/Home"), 500);
            }
            else {   //edit record
                dispatch(editUserStart({ id, records }));
                setEditMode(false);
                toast.success("Edited User Successfully");
                setTimeout(() => history.push("/Home"), 500);
            }
        }
    }
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setRecords({ ...records, [name]: value })
    }

    return (

        <MDBValidation className="row g-3" style={{ marginTop: "8px" }} noValidate onSubmit={handleSubmit}>
            <p className="fs-2 fw-bold"> {!editMode ? "Registration Form" : "Update Form"}             </p>

            <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>

                <MDBInput name="name" value={name || ""} type="text"
                    onChange={onInputChange} required label="Name" validation="Plz Provide Name" invalid />
                <br />
                <MDBInput name="email" value={email || ""} type="email"
                    onChange={onInputChange} required label="Email" validation="Plz Provide Email" invalid />
                <br />
                <MDBInput name="pwd" value={pwd || ""} type="password"
                    onChange={onInputChange} required label="Password" validation="Plz Provide Password" invalid />
                <br />
                <MDBInput name="mno" value={mno || ""} type="number"
                    onChange={onInputChange} required label="Mobile Number" validation="Plz Provide Mobile Number" invalid />
                <br />
                <MDBInput name="qur" value={qur || ""} type="text"
                    onChange={onInputChange} required label="Qualification" validation="Plz Provide Qualification" invalid />
                <br />
                <MDBInput name="addr" value={addr || ""} type="text"
                    onChange={onInputChange} required label="Address" validation="Plz Provide Address" invalid />
                <br />
                <div className="col-12">
                    <MDBBtn style={{ marginRight: "60px" }} type="submit">{!editMode ? "Register" : "Edit"}  </MDBBtn>
                    <MDBBtn onClick={() => history.push("/Login")} color="danger">Go Back</MDBBtn>
                </div>

            </div>

        </MDBValidation>

    )
}

export default UpdateUser;