import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Example</h1>
        <ul role="nav">
          <li><NavLink to="/home/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/home/about">About</NavLink></li>
          <li><NavLink to="/home/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
