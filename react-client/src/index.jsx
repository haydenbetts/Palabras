const React = require('react');
const ReactDOM = require('react-dom');
const GuestGreeting = require('./components/GuestGreeting.jsx');
const UserGreeting = require('./components/UserGreeting.jsx');
const axios = require('axios');

 class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: false,
            failedToFindUser: false
        }
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
        
    }

    componentDidMount() {

    }

    fetchUserInfo(username) {
        axios.get('/api/users', {
            params: {
              username: username
            }
          })
          .then((response) => {
            if (response.data.length < 1) {
                this.setState({failedToFindUser: true})
            } else {
                this.setState({currentUser: response.data[0]})
            }
          })
          .catch(function (error) {
            console.log(error);
          });
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