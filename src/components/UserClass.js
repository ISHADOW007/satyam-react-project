import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name +"child constructor");
        //always create all new state variabe in single this.state
        this.state ={
            count:0,
            count2:0,
        };
    }
    componentDidMount(){
        console.log(this.props.name +"Child ComponentsDidMount");
    }
    render(){
        console.log(this.props.name +"Children renders");
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

// excution of one parent two child class components
/*                                       
//expect output which is incorrect          
-Parent Constructor
-Parent render
      - first Constructor
      -first Renders
      -first ComponenetDidMount

      -secound Constructor
      -secound Renders 
      -secound ComponentDidMount
- Parent ComponentDidMount
*/

/* actual output which is correct          
-Parent Constructor
-Parent render
       IN SINGLE BATCH in a render phase of all children
      {- first Constructor
      - first Renders

      -secound Constructor
      -secound Renders }
      <DOM UPDATED - IN SINGLE BATCH in a commit phase of all children of all children>

      -first ComponenetDidMount
      -secound ComponentDidMount
- Parent ComponentDidMount
*/

/*Note dom manipulartion is very expensive in terms of time so react batche renders
 and commit phase of all chilren together
*/