const React = require('react');
const ReactDOM = require('react-dom');

const App = (props) => {
    return (<div> Hello from react! </div>)
}

ReactDOM.render(<App />, document.getElementById('app'))