
import './CategoryCard.css'
import bed from '../../assets/images/bed.png'

const CategoryCard = (props) => {
    console.log(props)
  return (
<div className="category-card">

    <div className="image-container">
       <img className='productcategory-img'src={props.img} alt="" />
    </div>

   <div className="card-content">
    <h3>{props.title}</h3>

    <ul className="product-list">
        {props.products.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>

    <button className="explore-btn">
        Explore Collection →
    </button>
</div>

</div>
  )
}

export default CategoryCard
