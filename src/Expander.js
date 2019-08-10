import React from "react";

class Expander extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
    }
    changeStatus() {
        const status = this.state.status;
        this.setState({
            status: !status
        });
    }
    render() {
        return (
            <div>
                <div onClick={this.changeStatus.bind(this)} > {this.props.title}</div>
                {this.state.status ? <div> {this.props.children} </div> : null}
            </div>
        );
    }
 }

export default Expander;