import React from "react";
import FileUpload from "./fileUpload";
import ItemList from "./itemList";
import Header from "./header";
// import displayItem from "./displayItem";
import { Box, boxContent } from "../Styles/Box.style";

const box = () => {
  return (
    <Box>
      <Header />
      <boxContent>
        <ItemList />
        {<displayItem />}
        <FileUpload />
      </boxContent>
    </Box>
  );
};

export default box;
