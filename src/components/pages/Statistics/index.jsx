import React, { useState } from 'react';
import { Modal } from '../../Modal'
import styled from 'styled-components';


const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 20px;
  margin: 10px auto 0;
  border: 1px solid #cc0000;
  background-color: #e50000;
  border-radius: 5px;
  cursor: pointer;
  transition:  all linear .2s;

  &:hover {
    border: 1px solid #cc0000;
    background-color: #8e2222;
    color: #fff;
  }
`

const Statistics = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <h1>Statistics page</h1>
      <button onClick={(e) =>setOpenModal(true)}>Open</button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        >
        <div>Content</div>
        <Button onClick={(e) => setOpenModal(false)}>Close</Button>
      </Modal>
    </>
  );
}

export default Statistics;
