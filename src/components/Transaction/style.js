import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  ${({value}) => value < 0 ? '#cf9e9e' : '#3333'};
  border: 1px solid #3a2323;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
Wrapper.displayName = 'TransactionWrapper'

export const TransactiononDate = styled.div`
  flex-grow: 1;
`;
TransactiononDate.displayName = 'TransactiononDate'

export const Value = styled.div`
  flex-grow: 1;
`;
Value.displayName = 'Value'

export const Comment = styled.div`
  flex-grow: 2;
`;
Comment.displayName = 'Comment'

export const Icon = styled.span`
  cursor: pointer;
  
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`
Icon.displayName = 'Value'