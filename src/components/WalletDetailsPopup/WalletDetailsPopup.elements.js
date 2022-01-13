import styled from 'styled-components'
// import { ActiveButton } from '../../pages/PoolPage/PoolPage.elements'

export const PopupElement = styled.div``

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #201f2c;
  padding: 0.5rem 1rem;
`
export const PopupBody = styled.div`
  padding: 1rem;
  padding-bottom: 2rem;
`
export const PopupHeading = styled.div`
  font-weight: normal;
  color: white;
  font-size: 25px;
`
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
`

export const AccountDetails = styled.div``
export const WalletName = styled.div`
  font-weight: normal;
  color: white;
  font-size: 25px;
  opacity: 0.9;
`
export const Account = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AccountNumber = styled.p`
  margin: 1rem 0;
  color: white;
  font-size: 30px;
  opacity: 0.9;
`
export const Button = styled.div`
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: #f18400;
  font-size: 25px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`
export const LinkGroup = styled.div`
  display: flex;
  gap: 1rem;
`
export const LinkGroupItem = styled.a`
  opacity: 0.7;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
`
export const Span = styled.span`
  color: white;
`
