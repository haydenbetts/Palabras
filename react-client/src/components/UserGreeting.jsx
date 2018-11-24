const React = require('react');

const UserGreeting = (props) => {
  return <div className="col-md-4 guest-greeting">
    <div className="user-greeting-wrapper">
      <h1> Hi {props.user.username}! </h1>
    </div>
  </div>
};

module.exports = UserGreeting;