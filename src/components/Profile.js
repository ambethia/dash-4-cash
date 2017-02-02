import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import MyGroupsDonations from './MyGroupsDonations'
import MyStats from './MyStats'

export default class Profile extends Component {

  state = {
    visible: false
  }

  donateModalToggle = () => {
    this.setState({ visible: !this.state.visible })
    console.log('modal')
  }

  render () {
    return (
      <div>
        <div className='inner'>
          <header className='profile'>
            <h1>My Profile</h1>
          </header>

          <div className='lower profile-main'>
            <div className='container'>
              <ul className='donations-ul'>
                <li className='donations' >
                  <div>
                    <h3>My Donations</h3>
                    <MyDonations />
                  </div>
                </li>
                <li className='donations' >
                  <div>
                    <h3>Group Donations</h3>
                    <MyGroupsDonations />
                  </div>
                </li>
                <li>
                  <a className='donate-button'
                    role='button'
                    onClick={this.donateModalToggle}>
                    <span>Donate</span>
                    <div className='icon'>
                      <i className='fa fa-money' />
                    </div>
                  </a>
                </li>
              </ul>

              <MyStats />
            </div>
          </div>
        </div>

        <div className={`donateModal ${this.state.visible ? 'overlay' : 'hidden'}`}>
          <div className='donateScroll'>
            <div className='donate-div'>
              <h2>Donate!</h2>
              <form className='donate-form'>
                <div className='donate-fields'>
                  <h3>Billing Info</h3>
                  <p><input type='text' className='checkout-input checkout-name' placeholder='Your name' /></p>
                  <p><input type='text' className='checkout-input checkout-exp' placeholder='MM' /></p>
                  <p><input type='text' className='checkout-input checkout-exp' placeholder='YY' /></p>
                  <p><input type='text' className='checkout-input checkout-card' placeholder='4111 1111 1111 1111' /></p>
                  <p><input type='text' className='checkout-input checkout-cvc' placeholder='CVC' /></p>
                  <h3>Group</h3>
                  <p>
                    <select name='checkout-input group-select'>
                      <option value='bradenton'>Bradenton Runners Club</option>
                      <option value='stpete'>St. Pete Runners Club</option>
                      <option value='tiy'>The Iron Yard Runners</option>
                      <option value='sarasota'>Sarasota Runners Club</option>
                    </select>
                  </p>
                </div>
                <a className='submit-button'
                  role='button'
                  onClick={this.donateModalToggle}>
                  <span>Submit</span>
                  <div className='icon'>
                    <i className='fa fa-play' />
                  </div>
                </a>
              </form>
            </div>
          </div>
        </div>

        <InnerFooter />

        <InnerNavbar />
      </div>
    )
  }
}

/* <p><input type='submit' className='checkout-btn' value='Purchase' /></p>
<div>
  <span>Group</span>
  <select name='group-select'>
    <option value='bradenton'>Bradenton Runners Club</option>
    <option value='stpete'>St. Pete Runners Club</option>
    <option value='tiy'>The Iron Yard Runners</option>
    <option value='sarasota'>Sarasota Runners Club</option>
  </select>
</div>
<div className='form-row'>
  <label>
    <span>Card Number</span>
    <input type='text' size='20' />
  </label>
</div>

<div className='form-row'>
  <label>
    <span>Expiration (MM/YY)</span>
    <input type='text' size='2' />
  </label>
  <span> / </span>
  <input type='text' size='2' />
</div>

<div className='form-row'>
  <label>
    <span>CVC</span>
    <input type='text' size='4' />
  </label>
</div>

<div className='form-row'>
  <label>
    <span>Billing Postal Code</span>
    <input type='text' size='6' />
  </label>
</div> */
