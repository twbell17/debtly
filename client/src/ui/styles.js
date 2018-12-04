import styled from 'styled-components'

export const AppContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  @media (min-width: 758px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60px 1fr min-content;
    grid-template-areas:
      "header"
      "main"
      "footer";
    min-height: 0;
    min-width: 0;
  }
`

// export const LeftSide = styled('div')`
//   grid-area: left;
//   background-color: #f4f4f4;
// `

// export const RightSide = styled('div')`
//   grid-area: right;
//   background-color: #f4f4f4
// `
