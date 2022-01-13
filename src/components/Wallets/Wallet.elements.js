import styled from "styled-components";

export const WalletElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

export const WalletItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 10px;
  border: 1px solid #21202a;
  padding: 0.75rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #21202a;
  }
  &.connected {
    border: 1px solid #f5a918;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      background-color: #f5a918;
      position: absolute;
      right: 5rem;
      border-radius: 50%;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
`;
export const WalletName = styled.span`
  font-weight: 500;
  font-size: 1.05rem;
`;
export const WalletIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
`;
