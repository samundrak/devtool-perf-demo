import React from 'react';

class ConsoleErrorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'ConsoleErrorPage',
    };
  }

  render() {
    return <div> Hello its me, {this.state.name}</div>;
  }

  componentDidMount() {
    console.log('i am info ');
    console.error('i am error ');
    console.warn('i am warning');
    fetch('https://www.google.com');
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
    throw new Error('hard to find error.');
  }
}

export default ConsoleErrorPage;
