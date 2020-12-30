import React from 'react';
import Image from "gatsby-image"

export default ({ avatar, author, description }) => (
  <>
    <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center -mt-16">
          <Image className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" fixed={avatar} alt={author}/>
        </div>
        <div>
        <h2 className="flex justify-center mt-6 text-gray-800 text-3xl font-semibold">{description}</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">{author}</a>
        </div>
    </div>
  </>
);