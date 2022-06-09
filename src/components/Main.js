import React, { useContext, useEffect, useState } from "react";
import { MainContext, SongContext } from "../context/MainContext";
import Header from "./Header";
import Player from "./Player";
import SongsList from "./SongsList";

export default function Main() {
    const [songs, setSongs] = useState([])
    const {songList, setSongList} = useContext(MainContext)
    const [songUrl, setSongUrl] = useState('')
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "1a7296580dmshb90f3746d9a0ffap1af01ejsn1bf488efa3df",
          "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
        },
      };
      useEffect(()=>{console.log(songs)},[songList])
      useEffect(() => {
        fetch('https://simple-youtube-search.p.rapidapi.com/search?query='+songList, options)
        .then(response => response.json())
        .then(response => setSongs(response.results))
        .catch(err => console.error(err));
      }, [songList]);
    
  return (
    <div>
        <SongContext.Provider value={{songs, setSongUrl, songUrl}}>
      <SongsList/>
      <Player/>
      </SongContext.Provider>
    </div>
  )
}
