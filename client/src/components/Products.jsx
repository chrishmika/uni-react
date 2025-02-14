import { useEffect, useState } from "react"
import { getProducts } from "../Hooks/useProducts";

const Products = () => {

    const [products,setProducts] = useState([]);
    console.log();
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            console.log("products", {res})
            setProducts(res.data);
            console.log(res.data);
        })
    },[])

   

    return(

        
        <div className="container">
            <form action="/" method="get">
                <a href="./1">click</a>
            </form>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product)=>{
                        return(
                            <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button >Delete</button> 
                                | 
                                <button >Edit</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Products