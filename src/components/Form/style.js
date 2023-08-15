import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;
Wrapper.displayName = 'TransactionWrapper'


export const Input = styled.input`
  border-radius: 8px;
  padding: 0 5px;
  min-width: 80px;
  margin: 10px 0;
  margin-right: 10px;
  border: 1px solid #dbdbdb;
  height: 40px;
  outline: none;
  box-shadow: 7px 7px 14px #b6a9a9, 7px -7px 14px #f6e5e5;
`;
Input.displayName = 'Input'


export const Row = styled.div`
  display: flex;
  align-items: center;
`;
Row.displayName = 'Row'

export const Comment = styled.textarea`
  padding: 5px;
  margin-left: 10px;
  border-radius: 8px;
  resize: none;
  color: black;
  height: 40px;
  border: 1px solid #b9acac;
  background-color: #e0e0e0;
  font-family: ingerit;
  line-height: 1.5;
  min-width: 200px;
  box-shadow: 10px 7px 14px #b6a9a9, 7px -7px 14px #f6e5e5;
`;
Comment.displayName = 'Comment';

export const Button = styled.button`
    background-color: #e0e0e0;
    height: 40px;
    padding: 0 21px;
    margin-right: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    box-shadow: 7px 7px 14px #b6a9a9, 7px -7px 14px #f6e5e5;
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
