const React = require('react');
const ReactDOM = require('react-dom');
const GuestGreeting = require('./components/GuestGreeting.jsx');
const UserGreeting = require('./components/UserGreeting.jsx');
const axios = require('axios');

 class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: false
        }
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
        
    }

    componentDidMount() {

    }

    fetchUserInfo(username) {
        // send axios request to /api/users where username = username
        axios.get('/users', {
            params: {
              username: username
            }
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
        // set current user equal to the response object
    }

    fetchUserWords(userId) {
    }

    render() {
        if (!this.state.currentUser) {
            return <GuestGreeting handleUsernameSubmit={this.fetchUserInfo}/>
        } else {
            return <UserGreeting user={this.state.currentUser} />
        }
    }
 }

ReactDOM.render(<App />, document.getElementById('app'))