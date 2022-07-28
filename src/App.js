import React, { useState, useEffect} from "react";
import Card from "./components/Card";
import reactLogo from './assets/react-icon.png'
import tailwindLogo from './assets/tailwind-css-logo.png'


function App() {
  const [characters, setCharacters] = useState([]);

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
        <div className="flex items-center gap-5 px-6 py-5 my-5 text-white transition bg-blue-800 rounded-lg shadow-xl cursor-pointer w-80 group ring-2 ring-offset-2 ring-cyan-700 hover:bg-blue-900 hover:bg-opacity-100">
          <img className="w-9" src={reactLogo} alt="" />
          <div>
            <span className="font-semibold">React</span>
            <span className="block text-xs text-white">Javascript</span>
          </div>
          <div>
            <i className="block transition transform -translate-x-1 opacity-0 fa fa-chevron-right group-hover:opacity-100 group-hover:translate-x-0"></i>
          </div>
        </div>
        <div className="flex items-center gap-5 px-6 py-5 my-5 text-white transition bg-blue-800 rounded-lg shadow-xl cursor-pointer w-80 group ring-2 ring-offset-2 ring-cyan-700 hover:bg-blue-900 hover:bg-opacity-100">
          <img className="w-9" src={tailwindLogo} alt="" />
          <div>
            <span className="font-semibold">Tailwind CSS</span>
            <span className="block text-xs text-white">CSS</span>
          </div>
          <div>
            <i className="block transition transform -translate-x-1 opacity-0 fa fa-chevron-right group-hover:opacity-100 group-hover:translate-x-0"></i>
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


