import React from 'react'
import Items from './Items'

const ItemList = ({productList}) => {
  return (
    <div className="cardContainer">
        {productList.map(product => <Items product={product} key={product.id}/>)}
    </div>
  )
}

export default ItemList
