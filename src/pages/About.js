import React,{useState} from "react";
import { Button, Input, Label } from "reactstrap";

function About (){
    const [img,setImg]=useState([])
    const imgHandler = (e) => {
      //  console.log(e.target.files)
      if(e.target.files)
      {
          const fileArray=Array.from(e.target.files).map((file) => URL.createObjectURL(file))
          console.log(fileArray);
          setImg((prevImages)=>prevImages.concat(fileArray))
          Array.from(e.target.files).map((file)=>URL.revokeObjectURL(file))
      }
    }
    const photos = (source) => {
        return source.map((photo)=> {
            return <img src={photo} key={photo} width={150}/>
        })
    }
    return(
        <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
            <div>
              <h1> Multiple Images</h1> 
            </div>
            <div>
                <Input type="file" multiple id="file" onChange={imgHandler}/>
                <div className="label-holder">
                    <Label htmlFor="File" className="Label">
                        </Label>

                </div>
                <div className="result">
                    {photos(img)}
                </div>
            </div>
           
        </div>
    )
}

export default About;