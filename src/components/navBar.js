import React from 'react'
import Signal from './Mobile Signal.png'
import Wifi from './Wifi.png'


export default function NavBar(){
    return (
        <nav className='navBar-Content'>
      <div className='notification_bar'>
        <img src={Signal} alt='' id='signal-img'/>
        <p id='figma-word'>Figma</p>
        <img src={Wifi} alt="" id="wifi-img"/>
      </div>
    </nav>
    )
}
