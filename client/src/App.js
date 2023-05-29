import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateSong from "./Components/CreateSong";
import SongList from "./Components/SongList";
import UpdateSong from "./Components/UpdateSong";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/CreateSong" element={<CreateSong />} />
        <Route path="/updateSong/:id" element={<UpdateSong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
