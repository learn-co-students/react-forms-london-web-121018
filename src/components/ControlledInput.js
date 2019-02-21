// Code ControlledInput Component Here
import React from 'react'

export default class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lasstName = event.target.children[1].value
    this.sendFormDataSomewhere({ firstName, lastName })
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
