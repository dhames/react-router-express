import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
  onClickButton() {
    browserHistory.push('/home/about');
  },

  render() {
    return (
      <div>
        <div>Home</div>
        <div>Click on below button to go to about using browser push state</div>
        <input type='button' onClick={this.onClickButton} value='Go to About'></input>
      </div>
    )
  }
})
