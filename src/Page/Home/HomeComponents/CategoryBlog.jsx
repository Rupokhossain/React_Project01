import React from "react";

const CategoryBlog = ({ blogs, categoryId }) => {
  const filterBlogs = categoryId
    ? blogs.filter((blog) => blog.category_id == categoryId)
    : blogs;
  return (
    <div className="mt-4">
      <div>
        <div>
          {filterBlogs.map((blog) => (
            <div className="flex items-center mb-4 border border-gray-200 rounded-md p-3 gap-3">
              <img className="w-20 rounded-md" src={blog.image} alt="" />

              <div className="space-y-2">
                <p>{blog.title}</p>
                <p className="text-xs text-gray-500">{blog.author}</p>

                <div>
                  <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-xs px-2 py-1 bg-[#8c83de] hover:bg-[#7065cb] duration-300 transition-all text-white justify-center rounded-md cursor-pointer font-normal"
                      onClick={() =>
                        document.getElementById(`modal_${blog.id}`).showModal()
                      }
                    >
                      Read More
                    </button>
                    <dialog id={`modal_${blog.id}`} className="modal">
                      <div className="modal-box max-w-4xl h-fit">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        {/* blog content */}
                        <div className="card card-side">
                          <img
                            className="w-64 rounded-md h-auto content-center"
                            src={blog.image}
                            alt="Movie"
                          />

                          <div className="card-body">
                            <h2 className="card-title text-xl">{blog.title}</h2>
                            <div className="flex gap-6 text-gray-500">
                              <p>{blog.author}</p>
                              <p>{blog.date}</p>
                            </div>
                            <p className="text-gray-500">
                              {blog.long_description}
                            </p>
                            <div className="flex gap-6 items-center justify-between text-xs text-gray-500">
                              <p>Read Time {blog.author} Minutes</p>
                              <p>Total Views {blog.views}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBlog;
