import React, { useContext, useEffect, useState } from "react";
import "./songs.css";

import { SongContext } from "../context/MainContext";

export default function SongsList() {
  const {songs, setSongUrl} = useContext(SongContext)
  const sendSong = (e)=>{
      setSongUrl(e.target.id)
      console.log(e.target.id);
  }

  return (
    <div className="songsL">
      {songs.map((v) => (
        <div className="song" id={v.id} onClick={sendSong}> 
        <img id={v.id} src={v.thumbnail.url}/>
        <b> id={v.id} {v.title}</b>
        </div>
      ))}
    </div>
  );
}
