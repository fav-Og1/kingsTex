import { useState } from 'react'
import kinglogo from '../img/kingLogo.png'
import HeaderLinks from './HeaderLinks'

export default function Header() {

const [show,setShow] =useState(true)

const onShowclick = () =>{
  if ( show == false) {
                 setShow(true) } else(setShow(false))
}


  return (
    <div className='header-components'>
      <div className='logo-holder'><img src={kinglogo} className='logo-img' /> </div>
      <div className='header-links'>
        
        <HeaderLinks />
      </div>
      <div className={ '' + (show ? 'menu-icon' : 'menu-icon-open')}> <i className="fa fa-bars" ></i></div>
    </div>
  )
}
