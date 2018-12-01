import styled from 'styled-components'

export const HeaderContainer = styled('div')`
  grid-area: header;
  align-self: center;
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  padding: 0 50px;
  box-shadow: 0px 5px 10px 0px  rgba(0,0,0,0.1);
  z-index: 2;
`

export const LogoContainer = styled('div')`
  width: 85px;
`

export const ActiveLink = styled('div')`
  > span {
    margin-right: 15px;
    color: black;
  }
`
