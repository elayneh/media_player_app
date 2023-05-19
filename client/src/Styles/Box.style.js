import styled from "@emotion/styled";

export const Box = styled.div`
  /* 
  */
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  @media (max-width: 786px) {
    overflow-y: scroll;
  }
`;
export const boxContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100vw;
  /* display: flex;
    flex-direction: row;
    */
  /* height:100vh; */
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
