import gasplant from '../img/gasplant.JPG'

export default function Main() {
  return (
    <div className='main-about'>
      <div>
       
      </div>
        <div className='main-img'>
          <div className='intro-talk'>
            <div className='hero-banner'><p>High quality gas <br />
            manufacturer <br />and distributor</p></div>
              <h1>" WE ARE COMMITTED TO <br /> DELIVERING <br />HIGH QUALITY GAS "</h1>
              <p>
In Kingstex International Gas Company Limited  <br />Our commitment to safety, innovation, 
                and customer satisfaction drives us <br />to deliver high-quality solutions 
                tailored to diverse industry needs.
              </p>
          </div>
      

          <div className='gas-plant-holder'>
            
              <img src={gasplant}  className='gas-plant'/>
            </div>
      </div>

     
      
     
    </div>
  )
}
