// create your App component here
import React,{Component} from 'react'

export default class App extends Component {
  state ={
    people: []
  }
  render(){
    return(
      <div>
      {this.state.people.map((ppl,index)=><h1 key={index}>{ppl.name}</h1>)}
      </div>
      )
  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then((data) => this.setState({ people: data.people }))
  }
}