//import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
            <div>
                Logged InUser
                <UserContext.Consumer>
                    {/* {(data)=> console.log(data)} */}
                    {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React web Series</h2>
            <UserClass name={"first"} location={"Dehradun Class"}/>
            
        </div>
        )
    }
}


export default About ;

