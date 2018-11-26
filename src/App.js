// create your App component here
import React,{Component} from 'react'

export default class App extends Componet {
  state ={
    people: []
  }
  render(){
    return(
      <div>
      this.state.people.map((ppl,index)=>(<div key=index>{ppl.name}</div>))
      </div>
      )
  }
}