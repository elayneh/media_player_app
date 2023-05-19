import React, { useEffect } from "react";
import {
  List,
  itemListStyle,
  DeleteButton,
  Holder,
  ListButton,
} from "../Styles/itemListStyle.style";
import { playCurrent } from "./Toolkit/Features/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DELETE_ITEM, GET_ITEM } from "./Saga/Types/ActionTypes";

const ItemList = () => {
  const itemList = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const handleitem = (item) => {
    dispatch(playCurrent(item));
  };
  useEffect(() => {
    const fetchFunc = async () => {
      dispatch({ type: GET_ITEM});
    };
    fetchFunc();
  }, []);
  const handleDelete = async (item) => {
    const id = item._id;
    dispatch({ type: DELETE_ITEM, id });
  };
  return (
    <>
      <itemListStyle>
        {itemList && (
          <Holder>
            {itemList.map((items, index) => (
              <List key={index}>
                <ListButton
                  onClick={() => {
                    handleitem(items);
                  }}
                >
                  {items.artist}
                </ListButton>
                <DeleteButton
                  deleteitem={items}
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
      </itemListStyle>
    </>
  );
};

export default ItemList;
