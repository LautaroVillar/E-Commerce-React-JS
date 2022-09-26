import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/*  import { data } from '../mocks/mockData' */
import ItemDetail from './ItemDetail' 
import { db } from '../firebase/firebase'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()
    //FIREBASE
    useEffect(()=>{
      const collectionProducts = collection(db, "products")
      const referenceDoc =doc(collectionProducts, id)
      getDoc(referenceDoc)
      .then((result)=>{
        setProductDetail({
          id:result.id,
          ...result.data()
        })
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
    },[id])
    
    //MOCKS
 /*     useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((item)=> item.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])
    */
  return (
    <div>
       {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  ) 
}

export default ItemDetailContainer