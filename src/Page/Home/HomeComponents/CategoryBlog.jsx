import React from 'react'

const CategorYBlog = ({blogs, categoryId}) => {

  const filterBlogs = categoryId ? blogs.filter(blog => blog.category_id == categoryId) : blogs;
  return (
    <div className='mt-4'>
        
        <div>
          <div>
            {
              filterBlogs.map(blog => (
                <div className='flex items-center mb-4 border border-gray-200 rounded-md p-3 gap-3'>
                  <img className='w-20 rounded-md' src={blog.image} alt="" />

                  <div>
                    <p>{blog.title}</p>
                    <p className='text-xs text-gray-500'>{blog.short_description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default CategorYBlog