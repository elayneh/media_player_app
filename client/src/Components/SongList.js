import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Button, Flex, Text } from "theme-ui";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { deleteSong, getSongsFetch } from "../store/slice/songslice";
import { addButton, deleteButton, updateButton } from "../styles/style";
import Header from "./Header";
import { AudioPlayer } from "../styles/style";

function SongList({ id }) {
  const [stats, setStats] = useState();
  const [error, setError] = useState();
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("https://media-player-app.onrender.com/songs/statstics")
      .then((response) => setStats(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          minHeight: "60vh",
          backgroundImage: "./images/bg.png",
        }}
      >
        <Heading textAlign="center">List</Heading>

        {songs.map((song) => (
          <Flex key={song._id} mt={2}>
            <Box>
              <AudioPlayer
                src={`https://media-player-app.onrender.com/songs`}
                controls
                autoPlay
              ></AudioPlayer>
            </Box>
            <Box
              p={2}
              width={1 / 2}
              color="black"
              bg="secondary"
              textAlign="center"
            >
              <Text fontSize={0}>
                Artist: {song.artist} - Title: {song.title}
              </Text>
            </Box>
            <Box p={2} width={1 / 2} color="white">
              <Link to={`/UpdateSong/${song._id}`}>
                <Button ml={3} css={updateButton}>
                  Update
                </Button>
              </Link>
            </Box>

            <Box p={2} width={1 / 2} color="white">
              <Button
                css={deleteButton}
                onClick={() => dispatch(deleteSong({ id: song._id }))}
              >
                Delete
              </Button>
            </Box>
          </Flex>
        ))}
        <Link to="/CreateSong">
          <Button css={addButton} mt={4}>
            Add
          </Button>
        </Link>
      </Box>
      <Box>
        {stats && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "35vh",
              backgroundColor: "rgb(190, 200, 199)",

              p: "50px",
              color: "white",
            }}
          >
            <Heading>Statistics</Heading>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Text mt="10px">Total Songs: {stats.totalSongs}</Text>
                <Text mt="10px">Total Artists: {stats.totalArtists}</Text>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Text mt="10px">Total Albums: {stats.totalAlbums}</Text>
                <Text mt="10px">Total Genres: {stats.totalGenres}</Text>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Box>
                <Heading as="h4" sx={{ fontSize: "24px", mt: "20" }}>
                  Songs By Genre
                </Heading>
                {stats.songsByGenre.map((genre) => (
                  <Text
                    sx={{ display: "flex", flexDirection: "column", mt: "15" }}
                    key={genre._id}
                  >
                    {genre._id}: {genre.count}
                  </Text>
                ))}
              </Box>
              <Box>
                <Heading as="h4" sx={{ fontSize: "24px", mt: "20" }}>
                  Songs By Artist
                </Heading>
                {stats.songsByArtist.map((artist) => (
                  <Text
                    sx={{ display: "flex", flexDirection: "column" }}
                    key={artist._id}
                  >
                    {artist._id}: {artist.count}
                  </Text>
                ))}
              </Box>
            </Box>
          </Box>
        )}
        {error && (
          <Box
            sx={{
              backgroundColor: "red",
              color: "white",
              p: 2,
              mt: 2,
              textAlign: "center",
            }}
          >
            {error}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SongList;
