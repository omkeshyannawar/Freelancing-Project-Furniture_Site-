import React from 'react'
import './ProductPage.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import bed from '../../assets/images/beds.png'
import temple from '../../assets/images/temple.png'
import doors from '../../assets/images/doors.jpeg'
import livingroom from '../../assets/images/livingroom.jpg'

const ProductPage = () => {
  return (
    <>
    <section className='Productpage'>
       <div className='Ppheading'>
         <h2>Our Collections</h2>
         <p>Explore our handcrafted teakwood furniture</p>
       </div>
       <div className="cardsContainer">
       <CategoryCard
         title="Bedroom Collection"
         img={bed}
         products={[
        "Beds",
        "Wardrobes",
        "Dressing Table",
        "Side Table"
    ]}
    />
    <CategoryCard
         title="Temple Collection"
         img={temple}
         products={[
        "Temple",
        "Paat",
        "Chaurang",
        "Kamaan"
    ]}
    />
    <CategoryCard
         title="Doors Collection"
         img={doors}
         products={[
        "Door Frames",
        "Doors",
        "Customize Door",
        "MDF Door"
    ]}
    />

    <CategoryCard
         title="Living Room Collection"
         img={livingroom}
         products={[
        "Sofa Set",
        "Dinning Table",
        "Corner Table",
        "Bhartiya Baithak"
    ]}
    />
    </div>

    </section> 

    </>
  )
}

export default ProductPage
