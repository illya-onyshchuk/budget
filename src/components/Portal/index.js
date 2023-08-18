import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

const parent = document.getElementById('modal')


export const Portal = ({children}) => {
  const div = useMemo(() => document.createElement('div'), []) 

  useEffect(() => {
    parent.appendChild(div)

    return () => {
      parent.removeChild(div)
    }
  }, [])

  return ReactDOM.createPortal(
    children,
    div,
  )
}