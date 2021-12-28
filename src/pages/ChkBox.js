import React from "react";
import { useState, useEffect } from 'react'
import { Button, Container, Form, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addChkStart } from "../redux/actions";


const ChkBox = () => {

    const [name, setName] = useState("");
    const [kp, setKp] = useState(false);
    const [pm, setPm] = useState(false);
    const [bm, setBm] = useState(false);
    const [choice, setChoice] = useState("");
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.data);
    let data = { name, kp, pm, bm, choice };

    useEffect(() => {
        dispatch(addChkStart())
    },[]);

   console.log("all Data",users)

    const getFormData = (e) => {

        e.preventDefault()
        dispatch(addChkStart(data));
           

    }

    return (
        <div>

            <Container style={{ width: "400px", alignContent: "left", padding: "40px" }}>
                <Form onSubmit={getFormData}>

                    <Label>Enter Your Name</Label>

                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />

                    <select onChange={(e) => setChoice(e.target.value)}>
                        <option>Choose Favourite Dish</option>
                        <option>Chinese</option>
                        <option>Panjabi</option>
                        <option>Italian</option>
                        <option>Gujrati</option>
                        <option>South Indian</option>
                    </select> <br /><br />

                    <Input type="checkbox" name="kp" onChange={(e) => setKp(e.target.checked)} />
                    Kaju Paneer <br />
                    <Input type="checkbox" name="pm" onChange={(e) => setPm(e.target.checked)} />
                    Paneer Masala<br />
                    <Input type="checkbox" name="bm" onChange={(e) => setBm(e.target.checked)} />
                    Butter Masala
                    <br /><br />
                    <Button type="submit">Submit</Button>


                </Form>
            </Container>
        </div>
    )
}

export default ChkBox;