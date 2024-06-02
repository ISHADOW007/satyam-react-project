//import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{ 
    constructor(props){
        super(props);
       // console.log("Parent Constructor")
    }

    componentDidMount(){
       // console.log("Parent Did Mount")
    }
    //render==mounting of component on wepage
    render(){
       // console.log("parent render")
        return (
            <div>
            <h1>About Class</h1>
            <h2>This is Namaste React web Series</h2>
            <UserClass name={"first"} location={"Dehradun Class"}/>
            
        </div>
        )
    }
}


export default About ;

