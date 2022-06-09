import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useContext } from "react";
import { SongContext } from "../context/MainContext";

export default function Player() {
  
  const {songUrl} = useContext(SongContext)
  const plyrProps =  {
    type: "video",
    sources: [
      {
        src: songUrl,
        provider: "youtube"
      }
    ]
  };
  return <Plyr source={plyrProps} />
}