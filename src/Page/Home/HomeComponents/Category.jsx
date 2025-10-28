import React from 'react'

const Category = ({categories, handleCategoryId}) => {
  return (
    <div className='flex flex-wrap gap-2'>
        {
          categories.map(category => (
            <div className='border border-gray-200 px-4 py-2 rounded-md'>
              <p className='cursor-pointer' onClick={() => handleCategoryId(category.id)}>{category.name}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Category