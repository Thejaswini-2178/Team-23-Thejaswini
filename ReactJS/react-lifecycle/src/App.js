import React, { Component } from 'react';
import Phases from './lifecyclemethods/lifecyclemethods';
import Mounting from './lifecyclemethods/Mounting';
import MountingPhaseMethods from './lifecyclemethods/MountingPhaseMethods';
import UpdatingPhaseMethod from './lifecyclemethods/UpdatingPhaseMethod';
import UnmountingPhaseMethod from './lifecyclemethods/UnmountingPhaseMethod';

class App extends Component {
  render() {
    return (
      <div>
        <Phases/>
        <Mounting/>
        <MountingPhaseMethods/>
        <UpdatingPhaseMethod/>
        <UnmountingPhaseMethod/> 
      </div>
    );
  }
}

export default App;
