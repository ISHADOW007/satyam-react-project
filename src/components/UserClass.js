import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        //always create all new state variabe in single this.state
        this.state ={
            count:0,
            count2:0,
        };
    }
    render(){
        const {name, location} = this.props;
        const {count,count2} = this.state;
        return (
        <div className="user-card"> 
        <h1>Count ={count}</h1>
        <h1>Count2 ={count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @akshaymach7</h4>
     </div>
        );
    };
}
export default UserClass ;