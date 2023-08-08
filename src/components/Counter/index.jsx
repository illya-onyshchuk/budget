import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [step, setStep] = useState(1);

  const currentValue = useRef(0);

   useEffect(() => {
    console.log('render:', clicks);
    console.log( `Component render Clicked ${clicks} times` )
    // currentValue.current = clicks

    setStep(s => s + 1)
  }, [clicks, setStep]);

  useEffect(() => {
    console.log('Step:', step)
  },[step])

  const showValue = () => {
    console.log(currentValue)

    setTimeout(() => {
      alert(currentValue.current)
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
      <input ref={currentValue} name='step' type="text" value={step} onChange={(e) => setStep(+e.target.value)}/>
    </div>
  );
}

export default Counter;
  