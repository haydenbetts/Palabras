const React = require("react");

const sampleWordStyle = {
  color: 'white',
  whiteSpace: 'nowrap',
  textDecoration: 'underline',
}

class PalabrasTutorial extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props;
    if (props.tutorialStep === 1) {
      return (
        <div className="row new-to-palabras" onClick={() => props.addTutorialWordTolist()}>
          <div className="col-md-11 tutorial-text-wrapper">
            New to Palabras?
            To add a word or phrase to your vocab list, just select it with your cursor.
    Try selecting this phrase: <span style={sampleWordStyle}>&nbsp;Mis primeras palabras</span>
          </div>
          <div className="col-md-1 text-right close-flash-button-wrapper">
            <button className="close-flash-button" onClick={() => { this.props.setTutorialStep(null) }}> X </button>
          </div>
        </div>
      )
    } else if (props.tutorialStep === 2) {
      return (
        <div className="row new-to-palabras" onClick={() => props.addTutorialWordTolist()}>
          <div className="col-md-11 tutorial-text-wrapper">
            <nobr>Nice! You have added to &nbsp;<span style={sampleWordStyle}>My Vocab</span>. If you want to save words on your list between
      visits to Palabras, you'll need to create a username.</nobr><br></br>
            Go ahead and enter a username above, then click &nbsp;<span style={sampleWordStyle}>Submit</span >.
          </div>
          <div className="col-md-1 text-right close-flash-button-wrapper">
            <button className="close-flash-button" onClick={() => { this.props.setTutorialStep(null) }}> X </button>
          </div>
        </div >
      )
    } else if (props.tutorialStep === 3) {
      return (
        <div className="row new-to-palabras" onClick={() => props.addTutorialWordTolist()}>
          <div className="col-md-11 tutorial-text-wrapper">
            <nobr>Woohoo! Now you can <span style={sampleWordStyle}>Save New Words To Database</span >&nbsp;from &nbsp;<span style={sampleWordStyle}>My Vocab</span >, and view&nbsp;<span style={sampleWordStyle}>English Translations</span >&nbsp; of your vocab.</nobr>
            &nbsp;Happy learning!
            </div>
          <div className="col-md-1 text-right close-flash-button-wrapper">
            <button className="close-flash-button" onClick={() => { this.props.setTutorialStep(null) }}> X </button>
          </div>
        </div>
      )
    } else if (props.tutorialStep === null) {
      return (<div></div>)
    }
  }
}

module.exports = PalabrasTutorial;
