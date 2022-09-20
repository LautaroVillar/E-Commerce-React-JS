import React,{useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const ItemListContainer = () => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]= useState(false)
  const{categoriaId}= useParams()

//FIREBASE

useEffect(() => {
  setLoading(true)
  const products = categoriaId ? query(collection(db, "products"),where("category","==", categoriaId)) : collection(db, "products")
  getDocs(products)
  .then((result)=> {
    const list = result.docs.map((product)=>{
      return{
        id:product.id,
        ...product.data()
      }
    })
    setProductList(list)
  })
  .catch((error)=> console.log(error))
  .finally(()=>setLoading(false))
}, [categoriaId])









  //MOCKS
/* useEffect(()=>{
  setLoading(true)
    data
    .then((res)=>{
      if(categoriaId){
        setProductList(res.filter((item)=> item.category === categoriaId))
      }else{
        setProductList(res)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [categoriaId])
 */



  
  return (
    <div style={{padding:'3rem'}}>
      {loading ? <p>Cargando...</p>:<ItemList productList={productList}/>}
    </div>
  )
}

export default ItemListContainer