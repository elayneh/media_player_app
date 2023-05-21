import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FileInput,
  UploadButton,
  UploadContainer,
  UploadView,
} from "./Styles/FileUploadStyle.style";
import Image from "../assets/images.jpeg";
import { ADD_SONG } from "./ReduxSaga/Types/ActionTypes";

const FileUploads = () => {
  const [fileValue, setFileValue] = useState("");
  const [artist, setArtist] = useState("");
  // const [error, setError] = useState("");
  const error = useSelector((state)=> state.Songs.error)
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append("artist", artist);
      dispatch({ type: ADD_SONG, formData });
      console.log(error.response.data);
      // setError(error.response.data.error);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    setFileValue(e.target.files[0]);
  };
  return (
    <UploadContainer>
      <UploadView src={Image} />
      <form action="">
        <FileInput
          type="file"
          onChange={handleUpload}
          accept="audio/*"
          required
        />
        <p style={{ color: "red" }}> {error} </p>
        <br />
        <UploadButton type="submit" onClick={handleSubmit} value="Add Song" />
      </form>
    </UploadContainer>
  );
};

export default FileUploads;
