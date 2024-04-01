import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { apiResponse } from "../../utils/apiResponse";

function Photos() {
  const { userId, albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    apiResponse(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      setPhotos
    );
  }, [albumId]);

  return (
    <div className="wrapper">
      <div className="photos">
        <h2>Зображення альбому id_{albumId}</h2>

        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt=""></img>
              <br></br> id_{photo.id} title: "{photo.title}"
              <Link to={`/users/${userId}/albums/${albumId}/photos`}></Link>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route path="/users/:userId/albums/:albumId/photos"></Route>
      </Routes>
    </div>
  );
}

export default Photos;
