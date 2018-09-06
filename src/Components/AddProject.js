import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
//import TextField from '@material-ui/core/TextField';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps = {
        categories: ['Fruits', 'Vegetables', 'Breakfast', 'Meat', 'Seafood', 'Frozen', 'Pets', 'Baking', 'Snacks', 'Bakery', 'Pasta & Rice', 'Cans & Jars', 'Refrigerated', 'Seasoning', 'Sauces, Oils & Condiments', 'Drinks', 'Paper Products', 'Cleaning', 'Personal Care', 'Misc. Items']
    }
    handleSubmit(e){
        if(this.refs.product.value === ''){
            alert('Product is required')
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                product: this.refs.product.value,
                category: this.refs.category.value
            }}, function(){
                //console.log(this.refs.product);
               this.props.addProject(this.state.newProject); 
            });
        }
        e.preventDefault();
        
    }

    render() {
    let categoryOptions = this.props.categories.map(category =>{
    return <option key={category} value={category}>{category}</option>
    });
    return ( 
      <div> 
        <h3>Grocery List</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Product</label><br />
                <input type="text" ref="product" />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <input type="submit" value="Submit" />
            <br />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;
