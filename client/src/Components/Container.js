import React from "react";
import FileUploads from "./FileUploads";
import SongList from "./SongList";
import DisplaySong from "./DisplaySong";
import Header from "./Header";
import { MainContainer, ContentContainer } from "./Styles/MianContainer.style";
const Container = () => {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <SongList />
        {<DisplaySong />}
        <FileUploads />
      </ContentContainer>
    </MainContainer>
  );
};

export default Container;
