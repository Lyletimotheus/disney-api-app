import React, { useState, useEffect} from "react";
import Card from "./components/Card";
import reactLogo from './assets/react-icon.png'
import tailwindLogo from './assets/tailwind-css-logo.png'


function App() {
  const [characters, setCharacters] = useState([]);
  console.log(characters)
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async() => {
    const check = localStorage.getItem('character');

    if(check) {
      setCharacters(JSON.parse(check));
    } else {
      const res = await fetch('https://api.disneyapi.dev/characters');
      const data = await res.json();

      localStorage.setItem('character', JSON.stringify(data.data));
      setCharacters(data.data);
      console.log(characters)
    }
  }

  const characterCardInfo = characters.map(characterObj => {
    return (
      <Card characterData={characterObj} key={characterObj._id}/>
    )
  });

  return (
    <div className="container px-4 mx-auto App">
      <h1 className="text-5xl font-bold text-center md:text-6xl">Disney Characters</h1>
      <p className="text-sm text-left text-gray-500 md:text-center">The REST and GraphQL API based on Disney characters.</p>
      <p className="text-sm text-left text-gray-500 md:text-center">Disney API is a restful and GraphQL API based on Disney characters. Using this API you can get information on Disney characters.</p>
      <p className="mt-2 text-sm text-left text-gray-500 md:text-center"><span className="font-semibold">Author:</span> Lyle Timotheus</p>
      <h2 className="text-sm text-left text-gray-500 md:text-center">Tech stack</h2>
      <div className="flex justify-center gap-6">
        <div class="w-80 group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 my-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src={reactLogo} alt="" />
          <div>
            <span className="">React</span>
            <span class="text-xs text-blue-300 block">Javascript</span>
          </div>
          <div>
            <i class="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
          </div>
        </div>
        <div class="w-80 group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 my-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img class="w-9" src={tailwindLogo} alt="" />
          <div>
            <span>Tailwind CSS</span>
            <span class="text-xs text-blue-300 block">CSS</span>
          </div>
          <div>
            <i class="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
        {characterCardInfo}
      </div>
    </div>
  );
}

export default App;


