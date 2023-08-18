import React, { useRef } from 'react';
import styled from 'styled-components';

import { Portal } from '../Portal';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, .3);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`
const Content = styled.div`
  text-align: center;
  font-weight: 700;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100px;
  min-width: 100px;
  max-height: 80%;
  max-width: 80%;
  box-sizing: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .10);
  background-color: #fff;
  transform: translateY(0);
  opacity: 1;
  border: 1px solid #882424;
  border-radius: 5px;
`

export const Modal = ({open, onClose, children}) => {
  const backDrop = useRef(null);

  const onClick = (e) => {
    if (backDrop.current === e.target) {
      onClose()
    }
  }

  return (
    <>
      {
        !open ? null :
        <Portal>
        <Backdrop onClick={onClick} ref={backDrop}>
          <Content> 
            {children}
          </Content>
        </Backdrop>
      </Portal>
      }
    </>
  );
}
