import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*  import { data } from '../mocks/mockData' */
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/firebase";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //FIREBASE
  useEffect(() => {
    const collectionProducts = collection(db, "products");
    const referenceDoc = doc(collectionProducts, id);
    getDoc(referenceDoc)
      .then((result) => {
        setProductDetail({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress sx={{ color: "#f4511e" }} />
        </Box>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
