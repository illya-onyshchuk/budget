import { useState } from "react";
import Form from "../Form";
import { Modal } from "../Modal";
import styled from 'styled-components';


const Button = styled.button`
    position:  fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    font-size: 42px;
    outline: none;
    background-color: #e0e0e0;
    margin-right: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    box-shadow: 7px 7px 14px #b6a9a9, 7px -7px 14px #f6e5e5;
    transition: .4s;
    
  &:hover {
    transition: .4s;
    background-color: #cacaca;
    box-shadow: 0px 1px 4px 2px #b6a9a9, 0px 1px 4px 2px #b6a9a9;
  }
  
  &:active {
    background-color: #cac4c4;
  } 
`


const ChangeBalance = ({onChange}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button onClick={(e) =>setOpenModal(true)}>+</Button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Form onChange={onChange} onCloseModal={() => setOpenModal(false)}/>
      </Modal>
    </>
  );
}

export default ChangeBalance;
