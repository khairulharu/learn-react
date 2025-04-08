import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
     const [products, setProducts] = useState([]);
     const [load, setLoad] = useState(false);

     useEffect(() => {
          console.info("Load products");
          if(load){
               fetch("/products.json")
                    .then((response) => response.json())
                    .then((data) => setProducts(data))
          }

          return () => {
               console.log("Products List component unmounted")
          }
     }, [load]);


     function handleClick() {
          console.log("handle click")
          setLoad(true);
     }


     return (
          <> 
               <h1>Product List</h1>
               <button onClick={handleClick}>Load Products</button>
               {products.map((product) => (
                    <Product key={product.id} product={product}/>
               ))}
          </>
     )
}