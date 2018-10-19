const React = require('react');

const UserGreeting = (props) => {
    return <div> 
            <h3> Hi {props.user.username}! </h3>
            <p> To add a word to your wordlist, just highlight it and then click! </p>
        </div>
};

module.exports = UserGreeting;