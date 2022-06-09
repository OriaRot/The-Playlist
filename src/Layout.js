import React, { useEffect, useState } from "react";
import { MainContext } from "./context/MainContext";
import Main from "./components/Main";
import Header from "./components/Header";

export default function Layout() {
  const [songList, setSongList] = useState("omer adam");

  return (
    <div>
      <MainContext.Provider value={{ songList, setSongList }}>
        <Header/>
        <Main />
      </MainContext.Provider>
    </div>
  );
}
