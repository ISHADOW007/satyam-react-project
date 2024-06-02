import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
       console.log(this.props.name +"child constructor");
       this.state={
        userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"http://dummy-photo.com",   
        },
       };
    }
    async componentDidMount(){
        console.log("Parent Did Mount")
        // Api calls
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
         userInfo:json,
        });
        console.log(json)
     }
     componentDidUpdate(){
        console.log("componentDid update");
     }
     componentWillUnmount (){
        console.log("Component Will UNnmount");
     }
    render(){
        console.log(this.props.name +"Children renders");
        const {name, location,avatar_url} = this.state.userInfo;
        return (
        
        <div className="user-card">
            <img src={avatar_url}/> 
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @akshaymach7</h4>
     </div>
        );
    };
}
export default UserClass ;

/*** complete excution of a class componenet
 * ------Mounting------
 * 
 * constructor(dummy)
 * Render(dummy)
 *   <HTML Dumy>
 * Component Did Mount
 *     <API Call>
 *     <this .setSTate> -> State variable is updated
 * ---- UPDATE....
 *    render(API data)
 *     <HTML(new API data>)
 * ComponentDid Update
 * 
 */

// firstchild constructor
// UserClass.js:31 firstChildren renders
// UserClass.js:18 Parent Did Mount
// UserClass.js:25 Object
// UserClass.js:31 firstChildren renders
// UserClass.js:28 componentDid update