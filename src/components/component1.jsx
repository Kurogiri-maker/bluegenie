import React, { Component } from 'react';
import { button } from 'react-bootstrap/lib/InputGroup';

class Component1 extends Component {
    state = {
        clicks: 0,
        show: true
      };
    render() { 
        return (
            <div>
                <button onClick={this.IncrementItem}>Click to increment by 1</button>
                <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
                <button onClick={this.ToggleClick}>
                { this.state.show ? 'Hide number' : 'Show number' }
                </button>
                <span >{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</span>
                
            </div>
            
        );
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
      ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }
    
}
 
export default Component1;