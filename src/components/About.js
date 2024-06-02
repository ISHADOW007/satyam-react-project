//import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{ 
    constructor(props){
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Did Mount")

    }
    //render==mounting of component on wepage
    render(){
        console.log("parent render")
        return (
            <div>
            <h1>About Class</h1>
            <h2>This is Namaste React web Series</h2>
            <UserClass name={"first"} location={"Dehradun Class"}/>
            <UserClass name={"secound"} location={"US"}/>
        </div>
        )
    }
}


export default About ;

// single child single parent example
// excution cycle follows cycle-> (loading webpage->render->api call data-> render)
// Parent Constructor
// About. parent render
// UserClass.child constructor
// UserClass. Children renders
// UserClass. Child Components Did Mount
// About. Parent Did Mount