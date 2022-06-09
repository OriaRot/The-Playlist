import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import "./songs.css";
export default function Header() {
  const { songList, setSongList } = useContext(MainContext);
  const [input, setInput] = useState("");

  const setSong = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    setSongList(input);
  };
  return (
    <>
      <header>
        <h1>Best Music App</h1>
      </header>
      <Search search={handleSearch} getSong={setSong} />
      <center><h2><b>{input}</b></h2></center>
    </>
  );
}

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="type to search"
        onChange={props.getSong}
      ></input>
      <button onClick={props.search}>Search</button>
    </div>
  );
}
