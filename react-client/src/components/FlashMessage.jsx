const React = require('react');

let flashMessageHidden = {
  display: 'none'
}

let flashMessageShown = {
  display: 'flex'
}

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: flashMessageHidden,
    }
  }


  render() {
    let style = flashMessageHidden;
    if (this.props.loginMessageState) {
      style = flashMessageShown;
    }

    return (
      <div className="row new-to-palabras" style={style}>
        In order to save words, you need to log in!
        <button className="close-flash-button" onClick={() => { this.props.renderLoginMessage(false) }}> X </button>
      </div >)
  }
};

module.exports = FlashMessage;