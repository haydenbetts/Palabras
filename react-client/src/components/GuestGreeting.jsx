const React = require('react');
// an input field 
// const GuestGreeting = (props) => {
//     return (<div> 
//         <h2> To use <i>Palabras</i>, you must enter a username</h2>
//         <h3> No worries if you haven't created a username. You can enter a new one now!</h3>
//         <label htmlFor="username"> Enter your username! </label>
//             <input id="username" type="text" /> 
//             <button type="button" onClick={() => {console.log('hello!')}} >Submit</button>
//         </div>)
// };

class GuestGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleUsernameSubmitAndTutorialUpdate = this.handleUsernameSubmitAndTutorialUpdate.bind(this);
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    }, () => {

    })
  }

  handleUsernameSubmitAndTutorialUpdate(username) {
    if (this.props.tutorialStep === 2) {
      this.props.setTutorialStep(3);
    } else {
      this.props.setTutorialStep(null);
    }
    this.props.handleUsernameSubmit(this.state.username);
  }

  render() {
    return (<div className="col-md-4 guest-greeting">
      <div id="username-input">
        <input id="username" type="text" placeholder="Username" value={this.state.username} onChange={(e) => { this.updateUsername(e) }} />
        <button type="button" onClick={() => { this.handleUsernameSubmitAndTutorialUpdate(this.state.username) }}> Submit</button>
      </div>
      <span className="guest-greeting-message">
        Enter your username, or create a new one!
        </span>
    </div>)
  }
}

module.exports = GuestGreeting;