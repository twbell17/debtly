import styled from 'styled-components'

export const Page = styled('div')`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 360px 1fr;
  grid-template-rows: 30% 1fr 30%;
  grid-template-areas:
    ". . ."
    ". page ."
    ". . .";
  background-color: #f4f4f4;
`

export const Content = styled('div')`
  grid-area: page;
  align-self: center;
  justify-self: center;
`