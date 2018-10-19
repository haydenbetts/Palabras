const React = require('react');
const PersistedWordListEntry = require('./PersistedWordListEntry.jsx');
const UnpersistedWordListEntry = require('./UnpersistedWordListEntry.jsx');

const WordList = (props) => {
    return (
        <div>
            <h3> Here are you words! </h3>
            <ul>
                {props.words.map((word, i) => {
                    if (word.userId) {
                        return  <PersistedWordListEntry word={word} key={i} index={i} />
                    } else {
                        return <UnpersistedWordListEntry word={word} key={i} index={i} deleteUnpersisted={props.deleteUnpersisted}/>
                    }
                })}
            </ul>
        </div>)
};

module.exports = WordList;