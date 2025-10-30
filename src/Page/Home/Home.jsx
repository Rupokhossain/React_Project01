
import { useEffect, useState } from 'react';
import Blogs from './HomeComponents/Blogs'
import Category from './HomeComponents/Category'
import CategoryBlog from './HomeComponents/CategorYBlog';


const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const[categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [activeCategory, setActiveCategory] = useState();

  useEffect(() => {
    fetch("blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])


  
    useEffect(() => {
    fetch("category.json")
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  const handleCategoryId = (id) => {
    setCategoryId(id);
    setActiveCategory(id);
  }

  return (
    <div className='container mx-auto px-24 pt-12'>

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-8'>
          <Blogs blogs={blogs}/>
        </div>
        <div className='col-span-4 border-gray-200 px-4 py-4 rounded-md'>
          <Category categories={categories} handleCategoryId={handleCategoryId} activeCategory={activeCategory}/>
          <CategoryBlog blogs ={blogs} categoryId={categoryId}/>
        </div>
      </div>
    </div>
  )
}

export default Home