import React from 'react'
import Signal from './Mobile Signal.png'
import Wifi from './Wifi.png'
import Alarm from './Alarm.png'
import Bluetooth from "./Bluetooth.png"
import Battery from "./Battery.png"
import Snowman from "./Snowman.png"


export default function NavBar(){
    return (
        <nav className='navBar-Content'>
      <div className='notification_bar'>
        <img src={Signal} alt='' id='signal-img'/>
        <p id='figma-word'>Figma</p>
        <img src={Wifi} alt="" id="wifi-img"/>
        <p id='time-word'>9:41 AM</p>
        <img src={Alarm} alt="" id="alarm-img"/>
        <img src={Bluetooth} alt="" id='bluetooth-img'/>
        <p id='battery-percentage'>100%</p>
        <img src={Battery} alt="" id='battery-img'/>
      </div>
      <div className='picture-content'>
            <img src={Snowman} alt="" id='snowman-img'/>
      </div>
      <div className='words-content'>
        <p id='main-topic'>Main items</p>
      </div>
    </nav>
    )
}
