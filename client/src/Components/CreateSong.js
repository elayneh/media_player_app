import React, { useState } from "react";
import { Label, Input, Select } from "@rebass/forms";
import { Box, Heading, Button, Card } from "rebass";
import { useDispatch } from "react-redux";
import { addSong } from "../store/slice/songslice";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { addButton } from "../styles/style";

const CreateSong = () => {
  const buttonStyles = css`
    background-color: rgb(4, 96, 99);

    &:hover {
      background-color: #012f30;
    }
  `;

  const navigate = useNavigate();

  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  const dispatch = useDispatch();

  const addHandler = async (e) => {
    e.preventDefault();
    navigate("/");
    const newSong = {
      genre,
      title,
      artist,
      album,
    };

    try {
      // Make API call to add song to the database

      const response = await fetch("http://localhost:8000/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSong),
      });

      if (!response.ok) {
        throw new Error("Failed to add song");
      }

      // Dispatch action to add song to the store
      const data = await response.json();
      dispatch(addSong(data));

      // Navigate back to home page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card p={4} sx={{ maxWidth: 600, width: "100%" }}>
        <Heading fontSize={5} color="primary" mb={3}>
          Adding New Song
        </Heading>

        <Box mb={3}>
          <Label htmlFor="genre">Genre</Label>
          <Select
            onChange={(e) => setGenre(e.target.value)}
            id="genre"
            name="genre"
            defaultValue="select"
          >
            <option>select</option>
            <option value={"pop"}>Pop</option>
            <option value={"Hip pop"}>Hip hop</option>
            <option value={"Rock"}>Rock</option>
            <option value={"Reggea"}>Reggea</option>
            <option value={"Afrobeat"}>Afrobeat</option>
          </Select>
        </Box>

        <Box mb={3}>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        <Box mb={3}>
          <Label htmlFor="artist">Artist</Label>
          <Input
            id="artist"
            name="artist"
            onChange={(e) => setArtist(e.target.value)}
          />
        </Box>

        <Box mb={3}>
          <Label htmlFor="album">Album</Label>
          <Input
            id="album"
            name="album"
            onChange={(e) => setAlbum(e.target.value)}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button css={addButton} onClick={addHandler}>
            Add Song
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CreateSong;
