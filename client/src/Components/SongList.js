import React, { useEffect, useState } from "react";
import {
  List,
  SongListStyle,
  DeleteButton,
  Holder,
  ListButton,
} from "./Styles/SongListStyle.style";
import { playCurrent } from "./ReduxToolKit/Features/SongSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DELETE_SONG, GET_SONG } from "./ReduxSaga/Types/ActionTypes";

const SongList = () => {
  const songList = useSelector((state) => state.Songs.songs);
  const dispatch = useDispatch();
  const [clicked,setClicked] = useState(false);
  const handleSong = (song) => {
    dispatch(playCurrent(song));
  };
  useEffect(() => {
    const fetchFunc = async () => {
      dispatch({ type: GET_SONG });
    };
    fetchFunc();
  }, []);
  const handleDelete = async (song) => {
    const id = song._id;
    dispatch({ type: DELETE_SONG, id });
  };
  return (
    <>
      <SongListStyle>
        {songList && (
          <Holder>
            {songList.map((items, index) => (
              <List key={index}>
                <ListButton
                  onClick={() => {
                    setClicked(true)
                    handleSong(items);
                  }}
                >
                  {items.artist}
                </ListButton>
                <DeleteButton
                  deleteSong={items}
                  onClick={() => {
                    handleDelete(items);
                  }}
                  primary
                >
                  <RiDeleteBin5Line />
                </DeleteButton>
              </List>
            ))}
          </Holder>
        )}
      </SongListStyle>
    </>
  );
};

export default SongList;
