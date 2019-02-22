import React from 'react';
export default class ControlledInput extends React.Component {

  state = {
    value: ' ',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
  //
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  // render() {
  //   return (
  //     <form onSubmit={event => this.handleSubmit(event)}>
  //       <input type="text" name='firstName' value={this.state.firstName}
  //       onChange={this.handleFirstNameChange(event)}/>
  //       <input type="text" name="lastName" value={this.state.lastName}
  //       onChange={this.handleLastNameChange(event)} />
  //     </form>
  //   )
  // }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          />
      </form>
    )
  }
}
