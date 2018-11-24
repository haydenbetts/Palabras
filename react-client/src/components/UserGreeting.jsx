const React = require('react');

const UserGreeting = (props) => {
  return <div className="col-md-4 guest-greeting">
    <p className="guest-greeting-message">
      <h3> Hi {props.user.username}! </h3>
    </p>
  </div>
};

module.exports = UserGreeting;