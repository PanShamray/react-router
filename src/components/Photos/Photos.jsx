import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

function Photos() {
    const { userId, albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Щось з інтернетом");
          }
          return res.json();
        })
        .then((data) => {
          setPhotos(data);
        })
        .catch((error) => {
          console.error("Помилка в отниманні даних: ", error);
        });
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
