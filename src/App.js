import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Users from "./components/Users/Users";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users/:userId/albums">Albums</Link>
            </li>
            <li>
              <Link to="/users/:userId/albums/:albumId/photos">Photos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/:userId/albums" element={<Albums />}></Route>
          <Route path="/users/:userId/albums/:albumId/photos" element={<Photos />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
