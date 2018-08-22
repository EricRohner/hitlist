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
        '\u261D', '\u{1F30B}', '\u{1F3F9}', '\u{1F409}', '\u{1F494}', '\u{1f525}', '\u{1F489}', '\u{1F982}', '\u{1F991}',
        '\u26A1', '\u26F7', '\u{1F4A3}', '\u{1F43F}', '\u{1F985}', '\u{1F41D}', '\u{1F6F4}', '\u{1F30A}', '\u{1F94C}',
        '\u{1F6D2}', '\u{1F4B0}', '\u{1F459}']
      const weapon = weapons[Math.floor(Math.random() * weapons.length)]
      this.setState(oldState => {
        return {
          victims: [`Casualty: ${dead} by ${weapon}`, ...oldState.victims],
          names: oldState.names.filter((name) => {
            return name !== dead
          })
        }
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello, I'm your personal assassin! {`\u{1F638}`}</h1>
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
            Execute
          </button>
        </form>
        <h2>Contracts:</h2>
        {this.state.names.map((name) => {
          return <li>{name}</li>
        })}
        <h2>Contracts fulfilled:</h2>
        {this.state.victims.map((victim) => {
          return <div>{victim}</div>
        })}

      </div>
    )
  }
}

export default App
