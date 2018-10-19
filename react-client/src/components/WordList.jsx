const React = require('react');
const WordListEntry = require('./WordListEntry.jsx');

const WordList = (props) => {
    return (
        <div>
            <h3> Here are you words! </h3>
            <ul>
                {props.words.map((word, i) => {
                    return <li key={i}> <WordListEntry word={word} /> </li>
                })}
            </ul>
        </div>)
};

module.exports = WordList;