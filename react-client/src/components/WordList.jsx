const React = require('react');
const PersistedWordListEntry = require('./PersistedWordListEntry.jsx');
const UnpersistedWordListEntry = require('./UnpersistedWordListEntry.jsx');

const WordList = (props) => {
    return (
        <div>
            <div className="word-list-header"> 
                <p className="word-list-header-text"> My Wordlist </p>
             </div>
            <ul className="word-list">
                {props.words.map((word, i) => {
                    if (word.userId) {
                        return  <PersistedWordListEntry word={word} key={i} index={i} />
                    } else {
                        return <UnpersistedWordListEntry word={word} key={i} index={i} deleteUnpersisted={props.deleteUnpersisted}/>
                    }
                })}
            </ul>
            <button onClick={() => props.persistWords()}> Save New Words to Database </button>
        </div>)
};

module.exports = WordList;