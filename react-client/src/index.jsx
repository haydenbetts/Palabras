const React = require('react');
const ReactDOM = require('react-dom');
const Greeting = require('./components/Greeting.jsx');
const GuestGreeting = require('./components/GuestGreeting.jsx');
const UserGreeting = require('./components/UserGreeting.jsx');
const WordList = require('./components/WordList.jsx');
const ArticleList = require('./components/ArticleList.jsx');
const NavBar = require('./components/NavBar.jsx');
const PalabrasTutorial = require('./components/PalabrasTutorial.jsx')
const LanguageSelect = require('./components/LanguageSelect.jsx');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameforTesting: "haydenbetts",
      currentUser: false,
      words: [],
      articles: [],
      word_translation_tuples: [],
      failedToFindUser: false,
      article: false,
      tutorialStep: 1,
      language: 'es'
    }
    this.fetchUserInfo = this.fetchUserInfo.bind(this);
    this.addWordToList = this.addWordToList.bind(this);
    this.addTutorialWordTolist = this.addTutorialWordTolist.bind(this);
    this.deleteUnpersistedWordFromList = this.deleteUnpersistedWordFromList.bind(this);
    this.persistWords = this.persistWords.bind(this);
    this.translateWords = this.translateWords.bind(this);
    this.setTutorialStep = this.setTutorialStep.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  setTutorialStep(step) {
    this.setState({ tutorialStep: step });
  }

  setLanguage(language) {
    console.log(this.state.language)
    this.setState({ language: language }, () => {
      console.log(this.state.language)
      this.fetchArticles();
    });

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
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  fetchArticles() {
    axios.get(`/api/articles?language=${this.state.language}`)
      .then((response) => {
        this.setState({ articles: response.data }, () => {
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

  addTutorialWordTolist() {
    this.addWordToList();
    this.setState({ tutorialStep: 2 });
  }

  deleteUnpersistedWordFromList(index) {
    var newWords = [...this.state.words];
    newWords.splice(index, 1);
    this.setState({ words: newWords });
  }

  translateWords() {
    if (this.state.words.length > 0) {
      axios.post('/api/translate', {
        words: this.state.words
      })
        .then((translated) => {
          this.setState({ word_translation_tuples: [] })


          var translated = translated.data.split(',');
          this.state.words.forEach((word, i) => {
            var newArr = this.state.word_translation_tuples;
            newArr.push([word.text, translated[i]]);

            this.setState({ word_translation_tuples: newArr });

          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {

    return (
      <div className="wrapper">
        <div className="nav-wrapper">
          <div className="row nav">
            <div className="col-md-4 header-column">
              <div className="row header">
                <div className="header-text"> Palabras </div>
              </div>
              <div className="row">
                <div className="intro-text"> Read the news, learn new vocabulary </div>
              </div>
            </div>
            <div className="col-md-4" />
            <Greeting currentUser={this.state.currentUser}
              handleUsernameSubmit={this.fetchUserInfo}
              setTutorialStep={this.setTutorialStep}
              tutorialStep={this.state.tutorialStep} />
          </div>
        </div>
        <PalabrasTutorial tutorialStep={this.state.tutorialStep} addTutorialWordTolist={this.addTutorialWordTolist} />
        <div className="row main-body-content">
          <div className="col-md-3 vocab-translations-wrapper">
            <LanguageSelect setLanguage={this.setLanguage} />
            <WordList
              words={this.state.words}
              deleteUnpersisted={this.deleteUnpersistedWordFromList}
              persistWords={this.persistWords}
              translateWords={this.translateWords}
              word_translation_tuples={this.state.word_translation_tuples}
            />
          </div>
          <div className="col-md-9">
            <ArticleList
              articles={this.state.articles}
              addWordToList={this.addWordToList}
            />
          </div>
        </div>
      </div >)
  }
}


ReactDOM.render(<App />, document.getElementById('app'))