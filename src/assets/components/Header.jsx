import { useState } from 'react'
import HeaderLinks from './HeaderLinks'
import kinglogo from '../img/kingLogo.png'



export default function Header() {

  const [show,setShow] = useState(true)

  const onShowclick = () =>{
  if ( show == false) {
                 setShow(true) } else(setShow(false))
                
      }



  return (
    <div className='header-components'>
      <div className='logo-holder'><img src={kinglogo} className='logo-img' /> </div>
      <div className="menu-icon" onClick={onShowclick} > <i className="fa fa-bars"></i></div>
      <div className='header-links'>
       
    <HeaderLinks show={show} />
      </div>
     
    </div>
  )
}
