import React, { Component } from 'react';

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1234, // Adding state to manage the ID
    };
  }

  handleClick = () => {
    this.setState({ id: 1256 });    // Update the ID when button is clicked
  };

  render() {
    return (
      <div>
        <div>
          <h1>1. Mounting Phase</h1>
          <p>Mounting is when an instance of the component is being created and inserted into the DOM.</p>
          <p>During the Mounting phase, we have 4 methods:</p>
          <ol>
            <li>constructor()</li>
            <li>render()</li>
            <li>static getDerivedStateFromProps()</li>
            <li>componentDidMount()</li>
          </ol>
        </div>

        <div>
          <h2>i constructor() method</h2>
          <ul>
            <li>Whenever a new component is created, it is called.</li>
            <li>It does not cause any side effects, like accessing HTTP requests.</li>
            <li>Initializing state.</li>
            <li>Directly override this.state (super(props)).</li>
          </ul>


          <h2>ii Static getDerivedStateFromProps()</h2>
          <ul>
            <li>When the state of the component depends on the props or parent component.</li>
            <li>It calls setState().</li>
            <li>Props change, and it forces an update.</li>
            <li>Does not cause the HTTP request (like AJAX).</li>
          </ul>
        </div>

        <h2>iii render()</h2>
        <ul>
          <li>Render is the normal method</li>
          <li>Read the propes and state and retun the jsx </li>
          <li>Donot change the DOM and intarat with the ajax call</li>
          <li>Children component life cycles also exicuted</li>
        </ul>

        <h2>iv componentDidMount()</h2>
        <ul>
          <li>Invoke imediatly after the components called</li>
          <li>It can  bring the side effects of the ajax call </li>
        </ul>
        <i><p>The above all methods will run sequence though we can write a code in non sync</p></i>
      </div>
    );
  }
}

export default Mounting;
