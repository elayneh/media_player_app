import React from "react";
import {
  ArtistHolder,
  AudioPlayer,
  DispContainer,
  DisplayScreen,
  EditSong,
  Image,
} from "./Styles/DisplayScreen.style";

import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { ArtistEditInput } from "./Styles/FileUploadStyle.style";
import { useState } from "react";
import { UPDATE_SONG } from "./ReduxSaga/Types/ActionTypes";
const DisplaySong = () => {
  let currentMusic = useSelector((state) => state.Songs.currentSong);
  const [clickedUpdate, setClickedUpdate] = useState(false);
  const [changedValue, setChangedValue] = useState(currentMusic.artist);
  const dispatch = useDispatch();
  const handleSubmit = async (song, e) => {
    const id = song._id;
    const artist = { changedValue };
    dispatch({ type: UPDATE_SONG, id, artist });
    setClickedUpdate(false);
    setChangedValue("");
  };
  const handleChange = (e) => {
    setChangedValue(e.target.value);
  };
  return (
    <DisplayScreen>
      <DispContainer>
        <h2>Playing Now</h2>
        <Image src="https://picsum.photos/200/200" />
        <div>
          <h3>
            {Object.keys(currentMusic).length !== 0
              ? currentMusic.song.split(".")[0]
              : null}
          </h3>
          <ArtistHolder>
            {clickedUpdate === false ? (
              <>
                {Object.keys(currentMusic).length !== 0 ? (
                  <p>{currentMusic.artist}</p>
                ) : (
                  <p>Music Player</p>
                )}
              </>
            ) : (
              <ArtistEditInput
                type="text"
                value={changedValue}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            )}
            {Object.keys(currentMusic).length !== 0 ? (
              clickedUpdate === false ? (
                <EditSong
                  onClick={() => {
                    setClickedUpdate(true);
                  }}
                >
                  <FaRegEdit />
                </EditSong>
              ) : (
                <EditSong
                  onClick={() => {
                    setClickedUpdate(true);
                    handleSubmit(currentMusic);
                  }}
                >
                  Submit
                </EditSong>
              )
            ) : null}
          </ArtistHolder>
        </div>
        <div>
          <AudioPlayer
            src={`https://media-player-8aaz.onrender.com/uploads/${currentMusic.song}`}
            controls
            autoPlay
          ></AudioPlayer>
        </div>
      </DispContainer>
    </DisplayScreen>
  );
};

export default DisplaySong;
