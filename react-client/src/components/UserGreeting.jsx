const React = require('react');

const UserGreeting = (props) => {
    return <div className="col-md-4 guest-greeting"> 
          <p className="guest-greeting-message">
            <h3> Hi {props.user.username}! </h3>
            <p> To add a word to your wordlist, just highlight it and then click! </p>
            </p>
        </div>
};

module.exports = UserGreeting;