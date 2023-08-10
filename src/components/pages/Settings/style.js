import styled from 'styled-components'

export const Button = styled.button`
    background-color: #e0e0e0;
    height: 30px;
    padding: 0 21px;
    margin-left: 10px;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    box-shadow: -7px 7px 14px #b6a9a9, 7px -7px 14px #f6e5e5;
    transition: .4s;
  
  
   & span:last-child {
    display: none;
  }
  
  &:hover {
    transition: .4s;
    border: 2px dashed #00BFA6;
    background-color: #fff;
    color: #00BFA6;
  }
  
  &:active {
    background-color: #87dbd0;
  } 
`;
Button.displayName = 'Button';