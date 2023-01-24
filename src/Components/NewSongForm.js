import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import "./SongEditForm.css";
const API = process.env.REACT_APP_API_URL;

const NewSongForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    genre: "",
    video_url: "",
    is_favorite: false,
  });

  const handleTextChange = (e) => {
    setNewSong({
      ...newSong,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setNewSong({
      ...newSong,
      is_favorite: !newSong.is_favorite,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}/songs`, newSong).catch((err) => {
      console.error(err);
    });
    window.alert("Item successfully created.");
    navigate("/songs");
  };

  return (
    <div className="EditedSong">
      <form className="SongEditForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={newSong.title}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="artist">Artist: </label>
        <input
          type="text"
          id="artist"
          value={newSong.artist}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="genre">Genre: </label>

        <input
          type="text"
          id="genre"
          value={newSong.genre}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="genre">Video URL: </label>
        <input
          type="text"
          id="video_url"
          value={newSong.video_url}
          required
          onChange={handleTextChange}></input>

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={newSong.is_favorite}
        />

        <Link to={`/songs/${id}`}>
          <button id="editFormBtnBack">Back</button>
        </Link>

        <button type="submit" id="btnSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewSongForm;
