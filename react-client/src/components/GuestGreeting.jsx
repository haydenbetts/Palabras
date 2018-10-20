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
    }

    updateUsername(e) {
        this.setState({
            username: e.target.value
        }, () => {
        
        })
    }

    render() {
        return (<div>
            <h2> To use <i>Palabras</i>, you must enter a username</h2>
            <h3> No worries if you haven't created a username. You can enter a new one now!</h3>
            <label htmlFor="username"> Enter your username! </label>
            <input id="username" type="text" value={this.state.username} onChange={(e) => {this.updateUsername(e)}}/>
            <button type="button" onClick={() => {this.props.handleUsernameSubmit(this.state.username)}}> Submit</button>
        </div>)
    }
}

module.exports = GuestGreeting;