import React from 'react'
import Instagram from '../images/Instagram.png'
import Facebook from '../images/facebook.png'
import Spotify from '../images/spotify.png'
import Tiktok from '../images/TikTok.png'
import Youtube from '../images/youtube.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div >
        <a href='/'><img src={Instagram} alt='Instagram'/></a>
        <a href='/'><img src={Tiktok} alt='Tiktok'/></a>
        <a href='/'><img src={Facebook} alt='Facebook'/></a>
        <a href='/'><img src={Spotify} alt='Spotify'/></a>
        <a href='/'><img src={Youtube} alt='Youtube'/></a>
      </div>
      <div className='FooterDetails'>
        <a href='/'>Contact Us</a>
        <a href='/'>About Us</a>
        <a href='/'>Terms of Service</a>
        <a href='/'>Privacy Policy</a>
      </div>
      <div>(c) 2022 Applause Creators, Inc. All rights reserved.</div>
    </div>
  )
}

export default Footer
