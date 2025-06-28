

export default function HeaderLinks(props) {

  const { show } = props

  return (
    <>
      <div className={ '' + (show ? 'links-holder' : 'links-holder-small')}>
      <div className="links-tab">
        <div className="menu-icon"><i className="fas fa-info-circle"></i></div>
        
        <span> About Us</span>
      </div>
      <div className="links-tab">
        <div className="menu-icon"><i class="fas fa-cogs"></i></div>
        
        <span> Services</span>
      </div>
      <div className="links-tab">
        <div className="menu-icon"><i class="fas fa-phone"></i></div>
        

        <span> Contact</span>
      </div>
      <div className="links-tab">
        <div className="menu-icon"><i class="fas fa-file-alt"></i></div>
        
        <span> Get a quote</span>
      </div>
       
    </div>
    
    </>
    
  )
}
