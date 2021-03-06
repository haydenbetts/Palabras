const React = require('react');
const PersistedWordListEntry = require('./PersistedWordListEntry.jsx');
const UnpersistedWordListEntry = require('./UnpersistedWordListEntry.jsx');
const TranslatedWordTuples = require('./TranslatedWordTuples.jsx');

const WordList = (props) => {
  return (
    <div className="word-list-wrapper">
      <div className="word-list-header">
        <p className="word-list-header-text"> My Vocab </p>
      </div>
      <ul className="word-list">
        {props.words.map((word, i) => {
          if (word.userId) {
            return <PersistedWordListEntry word={word} key={i} index={i} />
          } else {
            return <UnpersistedWordListEntry word={word} key={i} index={i} deleteUnpersisted={props.deleteUnpersisted} />
          }
        })}
      </ul>
      <button className="persist-words-button"
        onClick={() => {
          if (props.currentUser) { props.persistWords(props.currentUser.id) }
          else { props.renderLoginMessage(true) }
        }}
      > Save New Words to Database </button>
      <div className="translations">
        <div className="word-list-header">
          <p className="word-list-header-text"> English Translations </p>
        </div>
        <button className="translate-words-button" onClick={() => props.translateWords()}> Translate My Vocab </button>
        <TranslatedWordTuples word_translation_tuples={props.word_translation_tuples} />
      </div>
    </div>)
};

module.exports = WordList;