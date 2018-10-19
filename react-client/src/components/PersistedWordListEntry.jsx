const React = require('react');

const PersistedWordListEntry = (props) => {
    return <li> {props.word.text} </li>
};

module.exports = PersistedWordListEntry;