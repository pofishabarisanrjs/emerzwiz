import React, { useState } from 'react';
import '../CSS/Section.css';

const Stepper = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="stepper-container">
      <div className="label-left">Step {step === 1 ? 'One' : step === 2 ? 'Two' : 'Three'}</div>
      <div className="step-number">{step}</div>
      <div className="label-right">of 3</div>
      <div className="buttons">
        <button onClick={handlePrev} disabled={step === 1}>Previous</button>
        <button onClick={handleNext} disabled={step === 3}>Next</button>
      </div>
    </div>
  );
};

export default Stepper;
