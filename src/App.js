import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { names: [], name: '', victims: [] }
  }

  addVictim(e) {
    e.preventDefault()
    if (this.state.name !== '') {
      this.state.names.push(this.state.name)
      this.setState({ name: '' })
      console.log(this.state.names)
    }
  }

  kill() {
    if (this.state.names.length > 0) {
      const dead = this.state.names[Math.floor(Math.random() * this.state.names.length)]
      const weapons = ['\u2693', '\u2694', '\u26CF', '\u26BE', '\u2622', '\u2623', '\u{1F346}', '\u2604', '\u231B',
        '\u261D', '\u{1F30B}', '\u{1F3F9}', '\u{1F409}', '\u{1F494}', '\u{1f525}', '\u{1F489}', '\u{1F982}', '\u{1F991}']
      const weapon = weapons[Math.floor(Math.random() * weapons.length)]
      this.setState(oldState => {
        return {
          victims: [weapon + ' ' + dead, ...oldState.victims],
          names: oldState.names.filter((name, index, names) => {
            return name !== dead
          })
        }
      })
    }
  }



  render() {
    return (
      <div className = 'App'>
        <h1>Hello, I'm your personal assassin!</h1>
        <p>Be careful! Once you give the order to kill I cannot be stopped.</p>
        <p>I will make sure one of your enemies meets their doom and</p>
        <p>report back with their cause of death. I do my work very quickly.</p>
        <form onSubmit={(e) => this.addVictim(e)}>
          <input
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            type="text"
            placeholder="Victim's name"
          />
          <button type="submit">
            Add victim
          </button>
          <button type="button" onClick={() => this.kill()}>
            Kill!
          </button>
        </form>
        <h2>Hit List:</h2>
        {this.state.names.map((name, index, names) => {
          return <li>{name}</li>
        })}
        <h2>Dead:</h2>
        {this.state.victims.map((victim, index, victims) => {
          return <div>{victim}</div>
        })}


      </div>
    )
  }
}

export default App
