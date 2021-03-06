import  React from "react";

class EditFishForm extends React.Component{
    handleChnage= (event) =>{

        console.log(event.currentTarget.value); 
        //update the fish

        //1.take a copy of the current fish
        console.log(event.currentTarget.name)
        const updatedFish={
            ...this.props.fish,
            [event.currentTarget.name]:event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)
    };

    render(){
        return (


      <div className="fish-edit">

        <input type="text" name="name" onChange={this.handleChnage} value={this.props.fish.name}/>
        <input type="text" name="price" onChange={this.handleChnage}  value={this.props.fish.price} />
        <select name="status"  type="text"   onChange={this.handleChnage} value={this.props.fish.status}>
        <option value ="available"   >Fresh !</option>
        <option value="unavailable "  >Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChnage}  value={this.props.fish.desc}/>
        <input type="text" name="image"  onChange={this.handleChnage} value={this.props.fish.image}/>
        </div>

       
        );
    }
}

export default EditFishForm;
