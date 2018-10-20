const React = require('react');

var TranslatedWordTuples = (props) => {
    return (
            <ul className="nav"> 
            {console.log(props.word_translation_tuples)}
            {props.word_translation_tuples.map((tuple) => {
                return <li> {tuple[0]} - {tuple[1]} </li>
            })}
             </ul>
    )
}

module.exports = TranslatedWordTuples;