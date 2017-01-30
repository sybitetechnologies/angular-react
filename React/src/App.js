import React, { Component } from 'react';
import Project  from './component/project';
import AddForm  from './component/addForm';
import uuid from 'uuid' ;
import $ from "jquery";

class App extends Component {

  constructor(){
    super();
    this.state={
      _projects:[],
      _json:[]
    }
  }

  componentWillMount(){
  $.ajax({
      type:'GET',
      url:"/user",
      cache:false,
      dataType:'json',
      success:function(data){
        this.setState({_json:data})
        this.setState({_projects:data})
      }.bind(this),
      error:function(err){
        console.log(err)
      }

})
  }
  handleForm(addForm){
    event.preventDefault()
    let project=this.state._json
    project.push(addForm)
    this.setState({_projects:addForm})
    
      $.ajax({
      type:'POST',
      contentType: 'application/json',
      dataType:'json',
      data: JSON.stringify(addForm),
      url:"/postu",
      success:function(data){
        console.log(data)
      }.bind(this),
      error:function(err){
        console.log(err)
      }

})
  }
  handelDelete(id){

  }
  render() {
    return (
      <div className="App">
       <AddForm  addForm={this.handleForm.bind(this)} categories={this.state._json}/>
        <Project onDelete={this.handelDelete.bind(this)} projects={this.state._projects}/>
      </div>
    );
  }
}

export default App;
