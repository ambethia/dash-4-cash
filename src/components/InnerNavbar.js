import React, { Component } from 'react'
import { Link } from 'react-router'
import ScrollAnim from 'rc-scroll-anim'

export default class InnerNavbar extends Component {

  static PropTypes = {
  }

  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
    console.log('toggle')
  }

  render () {
    // const ScrollAnimLink = ScrollAnim.Link

    return (
      <div className='navBar'>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul>
            <li>
              <button className='menu' onClick={() => this.toggle()}>
                <i className='fa fa-window-close-o' aria-hidden='true' />
              </button>
            </li>
            <li><Link to='/profile'>My Profile</Link></li>
            <li><Link to='/mygroups'>My Groups</Link></li>
            <li><Link to='/help'>Help</Link></li>
            <li><Link to='/'>Log Out</Link></li>
          </ul>
        </nav>
        <p className='profilePic'>Strava profile pic</p>
      </div>
    )
  }
}
