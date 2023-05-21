import styled from "@emotion/styled";

export const SongListStyle = styled.div`
  width: 50%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  grid-template-columns: 6fr 4fr;

  background-color: white;
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
  @media (max-width:786px){
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
    grid-template-columns: 1fr;
  }
`;
export const Song = styled.p`
  align-items: center;
  margin-top: 0px;
`;
export const List = styled.section`
  display: flex;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  background-color: white;
  
`;
export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin-right: 20px;
  background-color: ${({ bg }) => bg || "green"};
  color: ${({ color }) => color || "white"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const ListButton = styled.li`
  display: block;
  width: 100%;
  border: none;
  margin-top: 0.1em;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  /* text-align: center; */
 
`;
export const Holder = styled.div`
    margin-bottom: 100px;
    width: 100%;
`
export const DeleteButton = styled.button`
  background: ${(props) => (props.$primary ? "palevioletred" : "white")};
  color: ${(props) => (props.$primary ? "white" : "palevioletred")};
  font-size: 20px;
  margin: 1em;
  align-items: center;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor:pointer;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
