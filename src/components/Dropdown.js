import React from 'react'
import smile from '../images/smile.png';

const Dropdown = () => {
  return (
    <div className='Dropdown'>
      <div className='row Userinfo'>
        <div>
            <div>Matt Jaffe </div>
            <div className='Email'>Matt@applause.stream</div>
        </div>
        <div className='Avtar DropdownAvtar'>MJ</div>
      </div>
      <div className='UpdateStatus row'>
        <img src={smile} />
        <div>Update Your Status</div>
      </div>
      <div className='Margin-top-20px Responsive'>Help</div>
      <div className='Margin-top-20px Responsive'>All Events</div>
      <div className='Margin-top-20px'>Edit Profile</div>
      <div className='Margin-top-20px'>Payouts</div>
      <div className='Margin-top-20px'>Sign Out</div>
      <button className='Button Button-color-yellow Margin-top-20px'>View Profile</button>
      <button className='Button Button-color-gray Margin-top-20px'>Share Profile Link</button>
    </div>
  )
}

export default Dropdown
