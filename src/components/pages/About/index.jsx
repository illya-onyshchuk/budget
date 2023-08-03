import React from 'react';
import { useContext } from 'react';
import CurrencyContext from '../../../providers/context';


const About = () => {
  const currency = useContext(CurrencyContext);

  debugger;
  
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

export default About;
