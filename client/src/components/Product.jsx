import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getProduct } from "../Hooks/useProducts";

const Product = () => {

    const [products,setProducts] = useState([]);
    console.log();
    const {id} = useParams();
    useEffect(()=>{
        getProduct(id)
        .then((res)=>{
            console.log("products", {res})
            setProducts(res.data);
            console.log(res.data);
        })
    },[id])

    return(
        <div className="container">
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
export default Product