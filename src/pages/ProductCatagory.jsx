import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from './../components/ProductCard';

const ProductCatagory = () => {
  const { products } = useAppContext()
  const { category } = useParams()   // ✅ "Category" ko "category" kiya

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  )

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )  // ✅ "products" ko "product" kiya

  return (
    <div className='mt-16'>
      {searchCategory && (
        <div className='flex flex-col items-end w-max'> 
          <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
      )}
      {filteredProducts.length > 0 ?( 
        <div className='grid grid-cols-2 sm:grid-col-3 lg:grid-col-5 gap-5 md:grid-cols-4 gap-4 mt-6'>{filteredProducts.map ((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}</div>
      ):(
        <div className='flex items-center justify-center h-[60vh]'>
          <p className='text-2xl font-medium text-primary'>No products found in this category.</p>
          
           </div>
      )}
    </div>
  )
}

export default ProductCatagory
