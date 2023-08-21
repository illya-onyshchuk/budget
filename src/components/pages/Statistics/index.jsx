import React, { useState } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  position: relative;
  width: 4em;
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

const list = new Array(20).fill(0).map(() => `Item - ${Math.random(1)}`)

const List = ({list}) => {
  const [filter, setFilter] = useState(''); 

  const filterList =  list.filter(item => item.includes(filter));

  return (
    <>
      <ul>
        {filterList.map(item => <li key={item}>{item}</li>)}
      </ul>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
    </>
  )
}

const Clicker = ({children}) => {
  const [n, setN] = useState(0)

  return (
    <div data-count={n}>
      <h2>{children}</h2>
      <p>Clicked {n} times.</p>
      <Button onClick={() => setN(n + 1)}>Click me</Button>
    </div>
  )
}

const Statistics = () => {

  
  return (
    <>
      <Clicker>
        <List list={list}/>
      </Clicker>
    </>
  );
}

export default Statistics;
