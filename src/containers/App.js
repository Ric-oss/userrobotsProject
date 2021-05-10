import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import "./App.css"
import Scroll from "../components/Scroll.js";
import Popup from "../components/Popup.js";

class App extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Robofans",
            robots:[],
            searchfield:'',
            popup:false

        }
    }

   //changeMessage=()=>{
    //  this.setState({message:'you subscribe successfully'})
  // }
    onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
   }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response=>{
          return Response.json();
      }).then(res=>{
          this.setState({robots:res});
      })
  }
   
  openPops=()=>{
      this.setState({popup:true});
  }
  closePops=()=>{
    this.setState({popup:false});

  }
    render(){
        const filteedRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(filteedRobots.length===0){
            return <h1>Loading.......</h1>
        }else{
            return(
       
                <React.Fragment>
                   {this.state.popup?<Popup closePops={this.closePops}/>:""}
                    
                    <div className="tc">
                    
                    <h1>{this.state.message}</h1>
                   {/* <button type="button" onClick={this.changeMessage}>subscribe</button>*/}
                     <button onClick={this.openPops}>popup</button>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteedRobots}/>
                    </Scroll>
                </div>
            
                </React.Fragment>
                
        
    )
        }
        
    }
}
 

export default App;