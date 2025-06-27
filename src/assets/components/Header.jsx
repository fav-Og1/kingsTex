import { useState } from 'react'
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
      <div className='header-links'>
        
       <div className={ '' + (show ? 'links-holder' : 'links-holder-small')}>
      <div className="links-tab">
        <span> About Us</span>
      </div>
      <div className="links-tab">
        <span> Services</span>
      </div>
      <div className="links-tab">
        <span> Contact</span>
      </div>
      <div className="links-tab">
        <span> Get a quote</span>
      </div>
       
    </div>
    
      </div>
     <div className="menu-icon" > <i className="fa fa-bars"  onClick={ 
      onShowclick
     }></i></div>
    </div>
  )
}
