import React from 'react'

const Category = ({categories, handleCategoryId, activeCategory}) => {
  return (
    <div className='flex flex-wrap gap-2'>
        {
          categories.map(category => (
            <div className={`border transition-all duration-300 px-4 py-2 rounded-md ${activeCategory === category.id ? "border-gray-600 bg-gray-500 text-white": "border-gray-200 hover:border-gray-600"}`}
            onClick={() => handleCategoryId(category.id)}

            >
              <p className='cursor-pointer'>{category.name}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Category