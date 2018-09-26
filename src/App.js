import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => this.setState({projects:data}));
    }

  getProjects(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Milk',
          category: 'Refrigerated'
        },
        {
          id: uuid.v4(),
          title: 'Eggs',
          category: 'Refrigerated'
        },
        {
          id: uuid.v4(),
          title: 'Coffee',
          category: 'Drinks'
        }, 
        {
          id: uuid.v4(),
          title: 'Grapes',
          category: 'Fruits'
        }, 
        {
          id: uuid.v4(),
          title: 'Apples',
          category: 'Fruits'
        }, 
        {
          id: uuid.v4(),
          title: 'Oranges',
          category: 'Fruits'
        }, 
        {
          id: uuid.v4(),
          title: 'Dishwasher Soap',
          category: 'Cleaning'
        }, 
        {
          id: uuid.v4(),
          title: 'Can Veggies',
          category: 'Cans & Jars'
        }, 
        {
          id: uuid.v4(),
          title: 'Cereal',
          category: 'Breakfast'
        }, 
        {
          id: uuid.v4(),
          title: 'Shampoo',
          category: 'Personal Care'
        }, {
          id: uuid.v4(),
          title: 'Loaf Bread',
          category: 'Bakery'
        }, 
        {
          id: uuid.v4(),
          title: 'Dog Food',
          category: 'Pets'
        }, 
        {
          id: uuid.v4(),
          title: 'Sugar',
          category: 'Baking'
        }, 
        {
          id: uuid.v4(),
          title: 'Flour',
          category: 'Bakng'
        }, 
        {
          id: uuid.v4(),
          title: 'Olive Oil',
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
