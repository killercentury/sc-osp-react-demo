import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>This is a React component</p>
        <Input/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('react-container'))
