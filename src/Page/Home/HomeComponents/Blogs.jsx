import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({blogs}) => {
  const sortBlogs = [...blogs].sort((a, b) => b.views - a.views);
  return (
    <div>
        {
          sortBlogs.map(blog => <BlogCard blog={blog}/>)
        }
    </div>
  )
}

export default Blogs