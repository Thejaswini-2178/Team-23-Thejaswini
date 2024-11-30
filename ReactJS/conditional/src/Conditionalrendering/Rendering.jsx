import React, { Component } from 'react'

export default class Rendering extends Component {
        render() {
          const showDetails = true;
          return (
            <>
              <h1>Welcome to the app</h1>
              {showDetails && <p>Here are the details...</p>}
            </>
          );
        }
      }
      