import React, { useEffect, useState } from 'react'
import ProductService from './service/ProductService'
import IProductData from './types/Product';

function Home() {

  const [products, setProducts] = useState<Array<IProductData>>([]);

  useEffect(() => {
    retriveProducts();
  }, []);



  const retriveProducts = () => {
    ProductService.getAll().then((response: any) => {
      setProducts(response.data)
    })
  }

  return (
    <div>
    </div>
  )
}

export default Home
