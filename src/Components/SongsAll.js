import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Song from "./Song";
const API = process.env.REACT_APP_API_URL;

const SongsAll = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="SongsAll">
      {songs.map((song) => {
        return <Song key={song.id} song={song} />;
      })}
    </div>
  );
};

export default SongsAll;
