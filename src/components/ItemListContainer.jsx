import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  //FIREBASE

  useEffect(() => {
    setLoading(true);
    const products = categoriaId
      ? query(collection(db, "products"), where("category", "==", categoriaId))
      : collection(db, "products");
    getDocs(products)
      .then((result) => {
        const list = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProductList(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div style={{ padding: "3rem" }}>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress sx={{ color: "#f4511e" }} />
        </Box>
      ) : (
        <ItemList productList={productList} />
      )}
    </div>
  );
};

export default ItemListContainer;
