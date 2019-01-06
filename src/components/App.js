import React from "react";
import Header from "./Header"; 
import Order from "./Order"; 
import Inventory from "./Inventory"; 
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from "./base"; 


class App extends React.Component{

     state ={
         fishes:{},
         order:{},
     };
      
     componentDidMount(){
         const{params}=this.props.match;
         //first reinstate our localSorage
        const localSorageRef=localStorage.getItem(params.storeId);
        if(localSorageRef){
            console.log("restoring");
            console.log(JSON.parse(localSorageRef))
            this.setState({order:JSON.parse(localSorageRef)})
        }
        console.log(localSorageRef);
      

         this.ref = base.syncState(`${params.storeId}/fishes`,{
 
            context:this,
            state:"fishes"
         });

     }

     componentWillUnmount(){
         console.log("unmount");
      base.removeBinding(this.ref);

     }

     componentDidUpdate(){
         console.log(this.state.order);
         localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))
     }


     addFish=fish=>{
         //1.Take a copy of the exsisting states

         const fishes ={...this.state.fishes};
         // 2.Add our new fish to that fishes variable
         fishes [`fish${Date.now()}`]= fish;
         this.setState({fishes })
 
        this.state.fishes.fish1=fish;
     };

     updateFish=(key,updatedFish)=>{
     //1.take the copy of the current state
     const fishes={...this.state.fishes};

     //2.update that state
     fishes[key]=updatedFish;

     //3.set that to state
     this.setState({fishes});

     }


      loadSampleFishes=() =>{
        this.setState({fishes:sampleFishes});
      }

      addToOrder=(key)=>{
      
       // 1.take a copy of this.state
       const order={...this.state.order};

        //2.Either add to the order,or update the number in our order
       order[key]=order[key]+ 1|| 1;
        //3.call setState to update our state object
         this.setState({order});
      };

    render(){
        return(
            <div className="catch-of-the-day">
             <div className="menu">
             <Header tagline="Fresh Sea Food Market" />
             <ul className="fishes">
             {Object.keys(this.state.fishes).map(key=>(
             <Fish key={key}
             index={key}
              detatils={this.state.fishes[key]}
              addToOrder={this.addToOrder}
              />
              ))}
             </ul>
             
             </div>
             <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish={this.updateFish}/> 
                <Order fishes={this.state.fishes} order={this.state.order}/>  
            </div>
        ) 

    }


}

export default App;