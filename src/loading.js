import React from "react";
import App from "./App";

class Loading extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2500)
    }

    render(){
        return (
            <div>
                <App isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default Loading;