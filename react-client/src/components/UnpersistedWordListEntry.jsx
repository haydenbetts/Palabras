const React = require('react');

const UnpersistedWordListEntry = (props) => {
    return (<li> {props.word.text} 
        <button onClick={() => props.deleteUnpersisted(props.index)}> Remove </button> 
     </li>)
};

module.exports = UnpersistedWordListEntry;