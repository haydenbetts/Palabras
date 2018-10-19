const React = require('react');

const UnpersistedWordListEntry = (props) => {
    return <li> {props.word.text} <button> Delete </button>  </li>
};

module.exports = UnpersistedWordListEntry;