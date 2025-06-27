import gasplant from '../img/gasplant.JPG'

export default function Main() {
  return (
    <div className='main-about'>
      <h2>  Kingstex International Your Trusted Gas Solution Provider</h2>
      <p>
        Kingstex International Gas Company Limited is a leading producer of high-quality industrial and medical gases. 
        We provide Oxygen, Nitrogen, Liquid Oxygen, Liquid Nitrogen, Medical Gas, and Compressed Air. 
        Our commitment to safety and reliability makes us the preferred choice for various industries.
      </p>
      
      <div className='main-img'>
        <h1> COMMITTED TO <br /> DELIVERING <br />HIGH QUALITY GAS </h1>

          <div className='gas-plant-holder'>
             <h4> We have a 250Cu.M/hr Oxygen-Nitrogen Plant for production</h4>
              <img src={gasplant}  className='gas-plant'/>
            </div>
      </div>
    </div>
  )
}
