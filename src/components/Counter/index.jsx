import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [step, setStep] = useState(1)

   useEffect(() => {
    console.log('render:', clicks);
    console.log( `Component render Clicked ${clicks} times` )

    setStep(s => s + 1)
  }, [clicks, setStep]);

  useEffect(() => {
    console.log('Step:', step)
  },[step])

  const showValue = () => {
    setTimeout(() => {
      alert( clicks)
    }, 2000)
  }

  function handlerClick() {
    setClicks(clicks + step)
  }

  return (
    <div>
      <div>Clicked: {clicks}</div>
      <button onClick={handlerClick}>Click</button>
      <br />
      <button onClick={showValue}>Show Value</button>
      <br />
      <input name='step' type="text" value={step} onChange={(e) => setStep(+e.target.value)}/>
    </div>
  );
}

export default Counter;
  