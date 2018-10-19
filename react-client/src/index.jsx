const React = require('react');
const ReactDOM = require('react-dom');
const GuestGreeting = require('./components/GuestGreeting.jsx');
const UserGreeting = require('./components/UserGreeting.jsx');
const WordList = require('./components/WordList.jsx');
const ArticleList = require('./components/ArticleList.jsx');


const axios = require('axios');

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameforTesting: "haydenbetts",
            currentUser: false,
            words: [],
            articles: ['','',''],
            failedToFindUser: false,
            article: false
        }
        this.fetchUserInfo = this.fetchUserInfo.bind(this);

    }

    componentDidMount() {
        if (this.state.usernameforTesting) {
            this.fetchUserInfo(this.state.usernameforTesting);
        }
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

    fetchArticle() {
        
    }

    render() {
        if (!this.state.currentUser) {
            return <GuestGreeting handleUsernameSubmit={this.fetchUserInfo} />
        } else {
            return (
                <div>
                    <div className="row">
                        <UserGreeting className="box a" user={this.state.currentUser} />
                    </div>
                    <div className="row">
                        <div className="col-md-6"> <ArticleList articles={this.state.articles} /> </div>
                        <div className="col-md-4"> <WordList words={this.state.words} /> </div>
                    </div>
                </div>)
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'))