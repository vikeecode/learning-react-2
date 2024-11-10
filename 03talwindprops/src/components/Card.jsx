import React from 'react'

function Card({username , btnText="vistme"}) {//here you give a default value also
    console.log(username);
    

    
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
<img
  src="https://images.pexels.com/photos/19767244/pexels-photo-19767244/free-photo-of-woman-in-traditional-peruvian-clothing-walking-on-a-field-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
/>
<div className="flex flex-col justify-between p-6 space-y-8">
  <div className="space-y-2">
    <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
    <p className="text-gray-400">
      lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
      soluta amet corporis accusantium aliquid consectetur eaque!
    </p>
  </div>
  <button
    type="button"
    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
  >
    {btnText}
  </button>
</div>
</div>
  )
}

export default Card
