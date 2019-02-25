import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleFirstNameChange(event) }>
          <input type="text" name="firstName" value={this.state.firstName} />
        </form>
      </div>
    )
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
  }

}


export default ControlledInput;
