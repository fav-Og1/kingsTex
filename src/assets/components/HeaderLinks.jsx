

export default function HeaderLinks(props) {

  const { show } = props

  return (
    <>
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
    
    </>
    
  )
}
