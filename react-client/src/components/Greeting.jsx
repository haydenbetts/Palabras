const GuestGreeting = require('./GuestGreeting.jsx');
const UserGreeting = require('./UserGreeting.jsx');

const React = require('react');

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.currentUser) { 
            return <GuestGreeting handleUsernameSubmit={this.props.handleUsernameSubmit} />
        } else {
            return <UserGreeting user={this.props.currentUser} />
        }
    }

};

module.exports = Greeting;