import React, { useState } from "react";
import { css } from "@emotion/react";
import { Label, Input, Select } from "@rebass/forms";
import { Box, Heading, Button, Card } from "rebass";
import { useDispatch } from "react-redux";
import { songActions } from "../store/slice/songslice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSong = () => {
  const buttonStyles = css`
    background-color: rgb(4, 96, 99);

    &:hover {
      background-color: #012f30;
    }
  `;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(songActions.updateSong({ genre, title, album, artist, id }));
    setGenre("");
    setTitle("");
    setArtist("");
    setAlbum("");
    navigate("/");
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
          Updating
        </Heading>

        <Box mb={3}>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            onChange={(e) => setTitle(e.currentTarget.value)}
            value={title}
          />
        </Box>

        <Box mb={3}>
          <Label htmlFor="genre">Genre</Label>
          <Select
            id="genre"
            name="genre"
            defaultValue="select"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          >
            <option>select</option>
            <option>Pop</option>
            <option>Hip hop</option>
            <option>Rock</option>
            <option>Reggea</option>
            <option>Afrobeat</option>
          </Select>
        </Box>

        <Box mb={3}>
          <Label htmlFor="artist">Artist</Label>
          <Input
            id="artist"
            name="artist"
            onChange={(e) => setArtist(e.currentTarget.value)}
            value={artist}
          />
        </Box>

        <Box mb={3}>
          <Label htmlFor="album">Album</Label>
          <Input
            id="album"
            name="album"
            onChange={(e) => setAlbum(e.currentTarget.value)}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button css={buttonStyles} onClick={updateHandler}>
            Update
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default UpdateSong;
