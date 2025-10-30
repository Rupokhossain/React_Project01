import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="border border-gray-200 rounded-md my-4 mx-3 ">
      <div className="card card-side bg-base-100 shadow-sm">
        <img
          className="w-64 rounded-md h-64 content-center"
          src={blog.image}
          alt="Movie"
        />

        <div className="card-body">
          <h2 className="card-title text-xl">{blog.title}</h2>
          <div className="flex my-4 gap-2 text-gray-500">
            <p>{blog.author}</p>
            <p>{blog.date}</p>
          </div>
          <p className="text-gray-500">{blog.short_description}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center text-xs text-gray-500">
              <p>Read Time {blog.author} Minutes</p>
              <p>Total Views {blog.views}</p>
            </div>

            <div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-[#FB5875] hover:bg-[#de2648] duration-300 transition-all text-white justify-center py-1 rounded-md px-3 cursor-pointer font-normal"
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
                      <p className="text-gray-500">{blog.long_description}</p>
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
    </div>
  );
};

export default BlogCard;
