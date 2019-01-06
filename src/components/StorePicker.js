import  React from 'react';
import {getFunName} from '../helpers';

 class StorePicker extends React.Component{
// constructor(){
//     super();
//   this.goToStore=this.goToStore.bind(this);
// }
    myInput=React.createRef();

    goToStore= event =>{
        //1.stop form from submitting
        event.preventDefault();
        //2.get the text from that input
       const storeName=this.myInput.current.value;

        //3.change the page to /store/whatever-they-input
       this.props.history.push(`/store/${storeName}`);
    }


    render(){
        
        return (
      <form className="store-selector" onSubmit={this.goToStore}>
      <h2> Please Enter A Store</h2>
      <input 
      type="text"
       required 
       ref={this.myInput}
       placeholder="store Name" 
       defaultValue={getFunName()}
       />
      <button type="submit">visit store -></button>
      </form>
        );
    }
}

export default StorePicker;

