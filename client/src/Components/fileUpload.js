import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FileInput,
  UploadButton,
  UploadContainer,
  UploadView,
} from "../Styles/fileUploadStyle.style";
import Image from "../assets/pic/logo.png";
import { ADD_ITEM } from "./Saga/Types/ActionTypes";

const FileUpload = () => {
  const [fileValue, setFileValue] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append("artist", artist);

    try {
      dispatch({ type: ADD_ITEM, formData });
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
    }
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
        <UploadButton type="submit" onClick={handleSubmit} value="Add" />
      </form>
    </UploadContainer>
  );
};

export default FileUpload;
