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
        <div className="col-md-11 tutorial-text-wrapper">
          In order to save words, you need to log in!
          </div>
        <div className="col-md-1 text-right close-flash-button-wrapper">
          <button className="close-flash-button" onClick={() => { this.props.renderLoginMessage(false) }}> X </button>
        </div>
      </div >)
  }
};

module.exports = FlashMessage;