const React = require("react");

const LanguageSelectButton = (props) => (
  <button className="language-selection"
    value={props.languageShort}
    onClick={(e) => props.setLanguage(e.target.getAttribute("value"))}
  > {props.languageLong} </button>
)

module.exports = LanguageSelectButton;