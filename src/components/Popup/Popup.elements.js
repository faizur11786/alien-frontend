import styled from "styled-components";

export const PopupElement = styled.div``;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #201f2c;
  padding: 0.5rem 1rem;
`;
export const PopupBody = styled.div`
  padding: 2rem 1rem;
  color: white;
`;
export const PopupHeading = styled.h4`
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
`;
export const Close = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: #18171f;
  }
  svg {
    fill: #fff;
  }
`;
