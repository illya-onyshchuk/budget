import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
`

export const Wrapper = styled.div`
  padding: 5px;
  background: ${props => props.theme.background};
`