import React, { Component } from 'react'

export default class ArrayLength extends Component {
        render() {
          const items = [];
          return (
            <div>
              {items.length > 0 ? (
                <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
              ) : (
                <p>No items found.</p>
              )}
            </div>
          );
        }
      }
      
