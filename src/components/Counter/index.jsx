import React, { useState } from 'react';

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [step, setStep] = useState(1)

  const showValue = () => {
    setTimeout(() => {
      alert(() =>  clicks)
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
  