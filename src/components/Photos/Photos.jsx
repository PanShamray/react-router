import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

function Photos() {
    const { userId, albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
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
    }, [userId, albumId]);


    return (
        <h2>ти зараз на Photos</h2>
    )
}

export default Photos;
