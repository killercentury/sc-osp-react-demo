import React from 'react';

class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" className="sg-Input" value="" placeholder="Enter text"/>
    );
  }

}

export default Input;
