import React from "react";
import InnerBox from "./InnerBox";
import HiddenBox from "./HiddenBox"

export default class ShowHide extends React.Component{
    render(){
        return(
            <div>
                <InnerBox>
                    <div>Click Me</div>
                </InnerBox>
                <InnerBox>
                   <div> Click Me</div>
                </InnerBox>
            </div>
        )
    }
}