
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ViewMyProducts = () => {

    const [products, setproducts] = useState([])

    const getAllMyProducts = async () => {
        try {
            // Call the correct endpoint without appending the user id (based on the current backend routes)
            const res = await axios.get("/all");
            console.log(res.data); // api response...
            setproducts(res.data.data); // assuming your API returns a 'data' field with the product list
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getAllMyProducts();
    }, [])
    

  return (
    <div style={{textAlign:"center"}}>
        MY PRODUCTS
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ProductName</th>
                    <th>IMAGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                   products?.map((sc)=>{
                    return<tr>
                        <td>{sc.productName}</td>
                        <td>
                            <img  style ={{height:100,width:100}}src={sc?.productURL}></img>
                        </td>
                        <td>
                            <Link to={`/updateproduct/${sc._id}`} className= "btn btn-info">UPdate</Link>
                        </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default ViewMyProducts