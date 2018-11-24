const React = require("react");

const sampleWordStyle = {
  color: '#6FA2AF',
  whiteSpace: 'nowrap'
}

class PalabrasTutorial extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props;
    console.log(props.tutorialStep)
    if (props.tutorialStep === 1) {
      return (
        <div className="row new-to-palabras" onClick={() => props.addTutorialWordTolist()}>
          New to Palabras?
          To add a word or phrase to your vocab list, just select it with your cursor.
    Try selecting this one: <span style={sampleWordStyle}>&nbsp;"Mi primeras palabras"</span>
        </div>
      )
    } else if (props.tutorialStep === 2) {
      return (
        <div className="row new-to-palabras" onClick={() => props.addTutorialWordTolist()}>
          <nobr>Nice! You have added to &nbsp;<span style={sampleWordStyle}>My Vocab</span>. If you want to save words on your list between
      visits to Palabras, you'll need to create a username.</nobr>
          Go ahead and enter a username above, then click &nbsp;<span style={sampleWordStyle}>Submit</span >.
        </div >
      )
    } else if (props.tutorialStep === 3) {
      return (
        <div className="row new-to-palabras" onClick={() => props.addTutorialWordTolist()}>
          <nobr>Woohoo! Now you can <span style={sampleWordStyle}>Save New Words To Database</span >&nbsp;from &nbsp;<span style={sampleWordStyle}>My Vocab</span >, and&nbsp;<span style={sampleWordStyle}>Translate Words</span >&nbsp;that you do not understand.</nobr>
          &nbsp;Happy learning!
      </div>
      )
    } else if (props.tutorialStep === null) {
      return (<div></div>)
    }
  }
}

module.exports = PalabrasTutorial;
