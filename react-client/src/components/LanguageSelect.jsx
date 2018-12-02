const React = require("react");
const LanguageSelectButton = require("./LanguageSelectButton.jsx");

const LanguageSelect = (props) => (
  <div className="word-list-wrapper">
    <div className="word-list-header">
      News Language
  </div>
    <div className="translation-buttons-wrapper">
      {
        [["es", "Spanish"],
        ["de", "German"],
        ["fr", "French"],
        ["it", "Italian"],
        ["en", "English"],
        ["pt", "Portuguese"]
        ].map((lang) => {
          return <LanguageSelectButton
            languageShort={lang[0]}
            languageLong={lang[1]}
            setLanguage={props.setLanguage}
          />
        })
      }
    </div>
  </div>
)

module.exports = LanguageSelect;