const React = require('react');

var TranslatedWordTuples = (props) => {
  return (
    <ul className="word-list">
      {props.word_translation_tuples.map((tuple) => {
        return <li> {tuple[0]} - {tuple[1]} </li>
      })}
    </ul>
  )
}

module.exports = TranslatedWordTuples;