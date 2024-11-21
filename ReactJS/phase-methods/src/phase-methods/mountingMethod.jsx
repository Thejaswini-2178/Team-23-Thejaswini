import React, { Component } from 'react';

class MountingExample extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello, World!' };
    console.log('Constructor: State initialized');
  }

static getDerivedStateFromProps(props, state) {
    console.log('GetDerivedStateFromProps: Syncing props with state');
    return null;
  }

componentDidMount() {
    console.log('ComponentDidMount: Component mounted in DOM');
    setTimeout(() => {
      this.setState({ message: 'React Lifecycle!' });
    }, 2000);
  }

render() {
    console.log('Render: Rendering UI');
    return <h1>{this.state.message}</h1>;
  }
}

export default MountingExample;
