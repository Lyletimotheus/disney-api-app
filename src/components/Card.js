import React from 'react'

function Card(props) {
  return (
    <a className="pointer-events-none max-w-[400px] relative block p-8 overflow-hidden border border-gray-100 rounded-lg" href="">
    <span
      className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>
  
    <div className="justify-between sm:flex">
      <div>
        <h5 className="font-sans text-xl antialiased font-bold text-gray-900">
          {props.characterData.name}
        </h5>
        {props.characterData.films.length !== 0 && <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded-2xl">Film</span>}
        {props.characterData.shortFilms.length !== 0 && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded-2xl">Short Films</span>}
        {props.characterData.tvShows.length !== 0 && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded-2xl">TV Shows</span>}


      </div>
  
      <div className="flex-shrink-0 hidden ml-3 sm:block">
        <img
          className="object-cover w-16 h-16 rounded-lg shadow-sm"
          src={props.characterData.imageUrl}
          alt=""
        />
      </div>
    </div>
  
    <div className="mt-4 sm:pr-8">
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
        provident a, ipsa maiores deleniti consectetur nobis et eaque.
      </p>
    </div>
  </a>
  
  )
}

export default Card