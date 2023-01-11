import React, { useState,useEffect } from 'react'
import { SearchBar , AboutLibre ,SongCard} from './Components'

function App() {
  const [songText, setsongText] = useState("");
  const [songs, setsongs] = useState([]);
  const parseText = (text) => {
    let newText = text.split(/[ ]+/);
    newText = newText.join("+");
    return newText;
  }
  const reloadSongs = (text) => {
    let queryText = parseText(text);
    setsongText(queryText);
    console.log("yes");
    updateNews();
  }

  const updateNews = async ()=> {
    let url = `https://jiosavn-19o9.vercel.app/search/songs?query=${songText}&page=1&limit=20`
    if(songText==="") url = "https://jiosavn-19o9.vercel.app/search/songs?query=Karan+Aujla"
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    setsongs(parsedData.data.results);
    console.log(songs);
  }
  useEffect(() => {
    updateNews();
  }, [songText])
  

  return (
    <div className="bg-black overflow-hidden">
      <SearchBar handleSearch={reloadSongs} />
      <div className="flex flex-col min-h-screen w-full">
        {songs.map((element) => {
          if(element.downloadUrl)
          return <div className="md:m-auto">
            <SongCard key={element.id} name={element.name}
             imgUrl={element.image[2].link} downloadUrl={element.downloadUrl[4].link} />
          </div>
        })}
      </div>
      {/* <AboutLibre /> */}
    </div>
  )
}

export default App