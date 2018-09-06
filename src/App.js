import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
//import TextField from '@material-ui/core/TextField';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  

  getProjects(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          product: 'Milk',
          category: 'Refrigerated'
        },
        {
          id: uuid.v4(),
          product: 'Eggs',
          category: 'Refrigerated'
        },
        {
          id: uuid.v4(),
          product: 'Coffee',
          category: 'Drinks'
        }, 
        {
          id: uuid.v4(),
          product: 'Grapes',
          category: 'Fruits'
        }, 
        {
          id: uuid.v4(),
          product: 'Apples',
          category: 'Fruits'
        }, 
        {
          id: uuid.v4(),
          product: 'Oranges',
          category: 'Fruits'
        }, 
        {
          id: uuid.v4(),
          product: 'Dishwasher Soap',
          category: 'Cleaning'
        }, 
        {
          id: uuid.v4(),
          product: 'Can Veggies',
          category: 'Cans & Jars'
        }, 
        {
          id: uuid.v4(),
          product: 'Cereal',
          category: 'Breakfast'
        }, 
        {
          id: uuid.v4(),
          product: 'Shampoo',
          category: 'Personal Care'
        }, {
          id: uuid.v4(),
          product: 'Loaf Bread',
          category: 'Bakery'
        }, 
        {
          id: uuid.v4(),
          product: 'Dog Food',
          category: 'Pets'
        }, 
        {
          id: uuid.v4(),
          product: 'Sugar',
          category: 'Baking'
        }, 
        {
          id: uuid.v4(),
          product: 'Flour',
          category: 'Bakng'
        }, 
        {
          id: uuid.v4(),
          product: 'Olive Oil',
          category: 'Sauces Oils & Condiments'
        }
      ]});
  }

  componentWillMount() {
    this.getProjects();

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
    
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
