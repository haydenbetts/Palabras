const React = require('react');
const ReactDOM = require('react-dom');
const GuestGreeting = require('./components/GuestGreeting.jsx');
const UserGreeting = require('./components/UserGreeting.jsx');
const WordList = require('./components/WordList.jsx');


const axios = require('axios');

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: false,
            words: [],
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
                    this.setState({ failedToFindUser: true })
                } else {
                    this.setState({ currentUser: response.data[0] }, () => {
                        this.fetchUserWords(this.state.currentUser.id)
                    })

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    fetchUserWords(userId) {
        axios.get('/api/words', {
            params: {
                id: userId
            }
        })
            .then((response) => {
                this.setState({ words: response.data }, () => {
                    console.log(this.state.words)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (!this.state.currentUser) {
            return <GuestGreeting handleUsernameSubmit={this.fetchUserInfo} />
        } else {
            return (
            <div>
                <UserGreeting user={this.state.currentUser} />
                <WordList words={this.state.words} />
            </div>)
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'))