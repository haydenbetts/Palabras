const React = require('react');
const WordListEntry = require('./WordListEntry.jsx');

const WordList = (props) => {
    return (<ul>
        {props.words.map((word, i) => {
            return <li key={i}> <WordListEntry word={word} /> </li>
        })}
    </ul>)
};

module.exports = WordList;