import React from 'react'

function Product({name,image,description,price}) {
  return (
    <div>
        <div>
          <img src={image} alt={name} />
          <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
          </div>
          <div>
            {description}
          </div>
        </div>

    </div>
  )
}

export default Product