import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { names: [], name: '', victims: [] }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.state.names.push(this.state.name)
    this.setState({ name: '' })
    console.log(this.state.names)
  }

  kill(e) {
    //e.preventDefault()
    const dead = Math.floor(Math.random() * this.state.names.length)
    // this.state.victims.push(this.state.names[dead])
    this.setState(oldState => {
      return {
        victims: [...oldState.victims, this.state.names[dead] ]
      }
    })
    console.log(this.state.victims)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            type="text"
            placeholder="Add a victim!"
          />
          <button type="submit">
            Add victim to list
          </button>
        </form>
        <h1>Hit List:</h1>
        {this.state.names.map((name, index, names) => {
          return <li>{name}</li>
        })}
        <button type="submit" onClick={(e) => this.kill(e)}>
          Kill!
        </button>
        <h2>Dead:</h2>
        {this.state.victims.map((victim, index, victims) => {
          return <li>{victim}</li>
        })}


      </div>
    )
  }
}

export default App
