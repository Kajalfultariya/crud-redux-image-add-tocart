import React from "react";
import HiddenBox from "./HiddenBox";

export default class InnerBox extends React.Component {
    state = {
        buttonClicked: false
    };
    handleClick = () => {
        this.setState({
            buttonClicked: !this.state.buttonClicked
        });
    };
    onInputChange = () => {

    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.children}
                {this.state.buttonClicked && <HiddenBox />}
               
                <input type="text" id="name" name="name" pattern="[a-zA-Z]+" 
                placeholder="Monty" required/>
  
                    </div>

                    )
    }
}