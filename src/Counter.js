import React from "react";



export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           seconds: 0
        };
    }

componentDidMount() {
    this.timer = setInterval(() =>{
        this.setState({seconds: this.state.seconds + 1})
    },1000);
}

componentWillMount() {
    clearInterval(this.timer);
}

    render(){
        return(
            <h1>{this.state.seconds}</h1>  
        );
    } 
}
