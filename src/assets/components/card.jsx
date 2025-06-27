import card from '../../data/card'


const Card = () => {


  return ( 
   <div className="song-tile"> 

   {card.map( (cards)=> {
   return(
     
    <div key={cards.id} className="song-list">
     
         <div className="songImage">
              <img className="song-image"  src={cards.image}/> 
               
          </div>
            
            <div className="song-title"><h4>{cards.title}</h4> </div>
            <div className="song-artist"><p>{cards.whatwedo}</p> </div>
      
      
           
    </div>
   )
        
   })}
    </div>
  )
}


export default Card
