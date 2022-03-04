import axios from "axios";
import { element } from "prop-types";
import React, { useEffect, useState } from "react";

const getDatafromLS = () => {
    const data = localStorage.getItem('records');
    if (data) {
        return JSON.parse(data);
    }
    else { return [] }
}

const AddtoCart = () => {
    const [data, setData] = useState([]);
    const [cdata, setCData] = useState([]);
    const [addData, setAddData] = useState(getDatafromLS);
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(0);
    const [scounter, setSCounter] = useState(0);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const result = await axios.get("http://localhost:3000/cart")
        setData(result.data)
    }
    const addFunc = async (val) => {
        setCounter(counter + 1);

        if (addData.length > 0) {
            let productsAlreadyInCart = false;
            addData.forEach((item) => {
                if (item == val?.name) {
                    productsAlreadyInCart = true;
                    //var cc=val?.qunty
                    setSCounter(scounter + 1)
                   // await axios.put(`http"//localhost:3000/cart/${scounter}`)
                }
            })

            if (!productsAlreadyInCart) {
                setAddData([...addData, val?.name]);
            }
        }
        else {
            setAddData([...addData, val?.name])
        }
        setShow(true);

    }
    const addFuncs = (val) => {
        addData.map((item) => {
            if (item === val) {
                setSCounter(counter + 1)
                console.log("yes")
            }
        }
        )
    }
    useEffect(() => {
        localStorage.setItem('records', JSON.stringify(addData));
    }, [addData])
    const delFunc = (val) => {
        setCounter(counter - 1);
        const items = addData.filter(element => element != val)
        setAddData(items);
    }
    return (
        <div>
            <div><button>Cart:{counter}</button></div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>AddtoCart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item?.name}</td><br />
                                        <td>{item?.price}</td>
                                        <td><button onClick={() => { addFunc(item) }}>+</button></td>

                                    </tr>
                                </>
                            )
                        }
                        )
                    }</tbody>
            </table>
            {show === true ?
                <>
                    Show Cart Detail
                    {addData.map(record => {

                        return (
                            <div>{record}cart :{scounter}
                                <button onClick={() => { addFuncs(record) }}>+</button>
                                <button onClick={() => { delFunc(record) }}>-</button>


                            </div>
                        )
                    })}



                </> : <></>
            }
        </div>
    )
}

export default AddtoCart;