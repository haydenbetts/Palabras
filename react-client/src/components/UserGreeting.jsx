const React = require('react');

const UserGreeting = (props) => {
    return <h3> Hi {props.user.username}! </h3>
};

module.exports = UserGreeting;