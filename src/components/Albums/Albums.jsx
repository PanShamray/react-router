import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Photos from "../Photos/Photos";

function Albums() {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Щось з інтернетом");
          }
          return res.json();
        })
        .then((data) => {
          setAlbums(data);
        })
        .catch((error) => {
          console.error("Помилка в отниманні даних: ", error);
        });
    }, [userId]);


  return (
    <div className="wrapper">
      <div className="albums">
        <h2>Альбоми користувача id_{userId}</h2>

        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              id_{album.id} "{album.title}"
                <Link
                    to={`/users/${userId}/albums/${album.id}/photos`}>
                    <br></br><button>Зображення альбому</button>
                </Link>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route
          path="/users/:userId/albums/:albumId/photos"
          element={<Photos />}
        ></Route>
      </Routes>
    </div>
  );
}

export default Albums;
