const React = require('react');
const ReactDOM = require('react-dom');
const Greeting = require('./components/Greeting.jsx');
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
            articles: [],
            failedToFindUser: false,
            article: false
        }
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
        this.addWordToList = this.addWordToList.bind(this);
        this.deleteUnpersistedWordFromList = this.deleteUnpersistedWordFromList.bind(this);
        this.persistWords = this.persistWords.bind(this);
    }

    componentDidMount() {
        this.fetchArticles();
        // Uncommenting this will allow you to test with sample user!
        // if (this.state.usernameforTesting) {
        //     this.fetchUserInfo(this.state.usernameforTesting);
        //     this.fetchArticles();
        // }
    }

    persistNewUser(username) {
        axios.post('/api/users', { username: username })
        .then(() => this.fetchUserInfo(username))
    }

    fetchUserInfo(username) {
        axios.get('/api/users', {
            params: {
                username: username
            }
        })
            .then((response) => {
                if (response.data.length < 1) {
                    this.persistNewUser(username);
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

    fetchArticles() {
        axios.get('/api/articles')
            .then((response) => {
                this.setState({ articles: response.data }, () => {
                    console.log(this.state.articles)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    persistWords() {
        axios.post('/api/words', {
            id: this.state.currentUser.id,
            words: this.state.words
        })
            .then((response) => {
                this.fetchUserWords(this.state.currentUser.id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addWordToList() {
        if (window.getSelection().toString().length > 0) {
            var newWord = window.getSelection().toString();
            this.setState({ words: this.state.words.concat([{ text: newWord, id: this.state.currentUser.id }]) });
        }
    }

    deleteUnpersistedWordFromList(index) {
        var newWords = [...this.state.words];
        newWords.splice(index, 1);
        this.setState({ words: newWords });
    }

    render() {

        return (
            <div>
                <div className="row">
                    <Greeting currentUser={this.state.currentUser}
                        handleUsernameSubmit={this.fetchUserInfo} />
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <WordList
                            words={this.state.words}
                            deleteUnpersisted={this.deleteUnpersistedWordFromList}
                            persistWords={this.persistWords}
                        />
                    </div>
                    <div className="col-md-10">
                        <ArticleList
                            articles={this.state.articles}
                            addWordToList={this.addWordToList}
                        />
                    </div>
                </div>
            </div>)
    }
}


ReactDOM.render(<App />, document.getElementById('app'))