import kinglogo from '../img/kingLogo.png'
import HeaderLinks from './HeaderLinks'

export default function Header() {
  return (
    <div className='header-components'>
      <div className='logo-holder'><img src={kinglogo} className='logo-img' /> </div>
      <div className='header-links'>
        
        <HeaderLinks />
      </div>
    </div>
  )
}
