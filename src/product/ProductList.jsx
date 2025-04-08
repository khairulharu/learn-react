import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
     const [products, setProducts] = useState([]);
     const [load, setLoad] = useState(false);

     useEffect(() => {
          console.log("call use effect with []");
     }, [])

     useEffect(() => {
          async function fetchProducts() {
               const response = await fetch("/products.json");
               const data = await response.json();
               setProducts(data)
          }

          console.log("Load Products");
          if(load){
               fetchProducts();
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