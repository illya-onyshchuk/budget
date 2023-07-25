import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color:  ${({value}) => value < 0 ? '#cf9e9e' : '#3333'};
  border: 1px solid #3a2323;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
`

Wrapper.displayName = 'TransactionWrapper'