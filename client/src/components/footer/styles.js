import styled, { css } from 'styled-components'

const dynamicStyle = props => css`
  flex-direction: ${(props.showLinks || props.pathname === '/evaluation') ? 'column' : 'row'};
  background-color: ${!props.showLinks ? '#f4f4f4' : ' rgba(255, 255, 255, 0);'};
  ${(props.showLinks || props.pathname === '/evaluation') ? 'box-shadow: 0px -5px 10px 0px  rgba(0,0,0,0.1);' : ''}
  > .copyright {
    ${(!props.showLinks && props.pathname !== '/evaluation') ? 'box-shadow: 0px -5px 10px 0px  rgba(0,0,0,0.1);' : ''}
  }
`
export const FooterContainer = styled('div')`
  grid-area: footer;
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
  min-height: 60px;
  color: black;
  > .copyright {
    display: flex;
    background-color: #fafafa;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }
  ${dynamicStyle}
`
