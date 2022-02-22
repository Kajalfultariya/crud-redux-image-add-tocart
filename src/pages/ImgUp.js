import React,{useState}  from "react";
import { Button, Input, Label } from "reactstrap";
import fileDownload from "js-file-download";
import axios from "axios";

export default function App() {
    let url = " ";
    let filename = "";
    const [img,setImg]=useState([])

    const imgHandler = (e) => {
        url = e.target.files;
       
    }
    const handleDownload = () => {
      
        if(url)
        {
            const fileArray=Array.from(url).map((file) => URL.createObjectURL(file))
            console.log(url[0].name);
            filename=url[0].name;
            axios
            .get(fileArray, {
                responseType: "blob"
            })
            .then((res) => {
                fileDownload(res.data, filename);
            });
            setImg((prevImages)=>prevImages.concat(fileArray))
            Array.from(url).map((file)=>URL.revokeObjectURL(file))
        }
      
    };
    const photos = (source) => {
        return source.map((photo)=> {
            return <img src={photo} key={photo} width={150}/>
        })
    }
    return (
        <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
            <Input type="file" id="file" onChange={imgHandler} />
            <br/>
            <Button onClick={() => { handleDownload(); }}         >
                Download
            </Button>
            <img src={photos} key={photos}/>
            <div className="result">
                    {photos(img)}
                </div>
        </div>
    );
}
