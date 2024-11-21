import React, { Component } from 'react';

class MountingPhaseMethods extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor is called");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called...");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount is called.....")
    }
    
    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default MountingPhaseMethods;
