import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

export const AudioPlayer = styled.audio`
  width: 100%;
  background-color: gold;
`;
const addButton = css`
    background-color: rgb(100, 250, 40);

    &:hover {
      background-color: "green;
    }
  `;

const deleteButton = css`
  background-color: rgb(255, 0, 40);

  &:hover {
    background-color: "green;
  }
`;
const updateButton = css`
background-color: rgb(192,192,192);

&:hover {
  background-color: "green;
}
`;

const bgStyle = css`
  background: url("../images/bg.png");
`;

export { addButton, deleteButton, updateButton };
