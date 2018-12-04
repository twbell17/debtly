import styled from 'styled-components'

export const FooterContainer = styled('div')`
  grid-area: footer;
  width: 100%;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
  color: black;
  > .copyright {
    display: flex;
    background-color: #fafafa;
    box-shadow: 0px -5px 10px 0px  rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }
  flex-direction: 'row';
  background-color: '#f4f4f4'
  box-shadow: 0px -5px 10px 0px rgba(0,0,0,0.1);  
`
