import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log("child constructor");
        //always create all new state variabe in single this.state
        this.state ={
            count:0,
            count2:0,
        };
    }
    componentDidMount(){
        console.log("Child Components Did Mount");
    }
    render(){
        console.log("Children renders");
        const {name, location} = this.props;
        const {count} = this.state;
        return (
        <div className="user-card"> 
        <h1>Count ={count}</h1>
        
        <button onClick={()=>{
            //Never Update state variables directly
            this.setState({
                count:this.state.count +1 ,
            })
        }}>Count Incerease</button>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @akshaymach7</h4>
     </div>
        );
    };
}
export default UserClass ;