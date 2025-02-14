import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api/";
// const baseUrl = "http://10.20.10.12:8000/api/";

const  getProducts = async() =>{
    const res = await axios.get(`${baseUrl}products`);
    return res;
}

const  getProduct = async(id) =>{
    const res = await axios.get(`${baseUrl}products/${id}`);
    console.log(res);
    return res;
}

export {getProducts,getProduct}
