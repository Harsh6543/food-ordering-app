//import React from 'react'
import {useState} from 'react'  /*import {usestate}*/
import {useNavigate} from 'react-router-dom'
import imagesMap from '../../assets/imagesMap.js'  
 
 
    const MenuCard = ({number, elementName, price, image, description,item, addToCart}) => {
        const [showMore, setShowMore] = useState(false);         /*create state --> true/false */  
        
        const navigate = useNavigate();  
          
  return (
    <>
        <div className='main-container'>

            <div className='num-menu'> 
                <p>{number}</p>
                <h3>₹{price}</h3>
            </div>          
            

 
            <h1>{elementName}</h1>
            <img src= {imagesMap[image]} alt={elementName} /> 


            <div className='paybtn'>
              <h4 className='description'>
                {showMore ? description : description.slice(0, 28) + '...'}
              </h4>
              <button className='readbtn' onClick={() => setShowMore(!showMore)}>{showMore ? 'Read Less' : 'Read More'}</button> 
            </div>

            <div className='btndiv'>
                <button className='addbtn' onClick={() => addToCart(item)} >Add to cart</button>
                <button className='orderbtn' onClick={() => navigate("/payment", {state: {total:price}})}>Order Now</button>
            </div>

        </div>
    </>
  )
}

export default MenuCard
