import styled from 'styled-components'

export const Page = styled('div')`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  grid-template-areas:
    "menu page";
  background-color: #f4f4f4;
`
export const Content = styled('div')`
  grid-area: page;
  align-self: center;
  justify-self: center;
`
