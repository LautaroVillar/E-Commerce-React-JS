import { Button, Grid, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useCart } from '../context/CartContext'
import { db } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

export default function CheckOut() {
    const [idBuy, setIdBuy] = useState("")
    const [buyer, setBuyer]= useState({})
  const navigate = useNavigate()
    const{cartTotal, cart,clear} = useCart()

    const datesBuyer = (e)=> {
        setBuyer({
            ...buyer,
           [e.target.name]:e.target.value
        })
    }
   const finishBuy = (e) => {
        e.preventDefault()
      const myCollection = collection(db, "orders")
      addDoc(myCollection, {
        buyer,
        items: cart,
        total:cartTotal(),
        date: serverTimestamp()
      })
      .then((res)=>{
        setIdBuy(res.id)
        clear()
      })
      .catch((error)=> console.log(error))
  
    }

  return (
    <>
    <Grid 
        container 
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "80vh" }}>
        <Grid item>
        <Paper sx={{ padding: "1.8em", borderRadius: "0.5em" }} elevation={3}>
        {!idBuy  ?
        <div>
        <Box component="form" onSubmit={finishBuy}> 
     
            <TextField
            fullWidth
            onChange={datesBuyer}
            name="name"

              margin="normal"
              type="text"
              label="Nombre y apellido"
            />
            <TextField
            fullWidth
            onChange={datesBuyer}
            name="number"
              margin="normal"
              type="tel"
              label="Numero"
            />
            <TextField
            fullWidth
            onChange={datesBuyer}
            name="email"
            margin="normal"
            type="email"
              label="Email"
            />
             <Button fullWidth type="submit" variant="contained" size="large" sx={{padding:"15px", marginTop:"5px"}} onClick={finishBuy}>Comprar</Button> 
        
             </Box>
             </div>
              :
              <div>
                  <h2>Muchas gracias por su compra</h2>
                  <h4>Su orden es: {idBuy}</h4>
                  <Button onClick={()=>navigate('/')} >Volver</Button>
              </div>
       
                }
        </Paper>
        </Grid>
    </Grid>
    </>
  )
}


