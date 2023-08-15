import styled from 'styled-components'

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: lightgray;

  div {
  display: flex;
  margin-left: auto;
} 

 a {
  text-decoration: none;
  color: ${({theme}) => theme.linkColor};
  font-weight: 800;
  margin-right: 20px;
  font-size: 20px;
}  


& a::after, a::before {
  content: '';
  width: 0%;
  height: 2px;
  background: #ff0000;
  transition: 0.5s;
  display: block;
}

& a:hover::after, a:hover::before {
  width: 100%;
}
`
Nav.displayName = 'Nav'