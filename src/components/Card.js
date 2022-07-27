import React from 'react'

function Card(props) {
    console.log(props.characterData)
  return (
    <a class="pointer-events-none max-w-[400px] relative block p-8 overflow-hidden border border-gray-100 rounded-lg" href="">
    <span
      class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>
  
    <div class="justify-between sm:flex">
      <div>
        <h5 class="font-bold text-gray-900 font-sans text-xl antialiased">
          {props.characterData.name}
        </h5>
        {props.characterData.films.length !== 0 && <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded-2xl">Film</span>}
        {props.characterData.shortFilms.length !== 0 && <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded-2xl">Short Films</span>}
        {props.characterData.tvShows.length !== 0 && <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded-2xl">TV Shows</span>}


      </div>
  
      <div class="flex-shrink-0 hidden ml-3 sm:block">
        <img
          class="object-cover w-16 h-16 rounded-lg shadow-sm"
          src={props.characterData.imageUrl}
          alt=""
        />
      </div>
    </div>
  
    <div class="mt-4 sm:pr-8">
      <p class="text-sm text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
        provident a, ipsa maiores deleniti consectetur nobis et eaque.
      </p>
    </div>
  </a>
  
  )
}

export default Card