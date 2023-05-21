import React from "react";
import FileUpload from "./fileUpload";
import ItemList from "./itemList";
import Header from "./header";
import DisplayItem from "./displayItem";
import { Box, BoxContent } from "../Styles/Box.style";

const box = () => {
  return (
    <Box>
      <Header />
      <BoxContent>
        <ItemList />
        {<DisplayItem />}
        <FileUpload />
      </BoxContent>
    </Box>
  );
};

export default box;
