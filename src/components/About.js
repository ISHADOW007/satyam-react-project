import User from "./User";
import UserClass from "./UserClass";

const About= () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React web Series</h2>
            <User name={"Akshay Saini (function)"}/>
            <UserClass name={"Akshay Saini (Class)"} location={"Dehradun Class"}/>
        </div>
    );
};

export default About ;