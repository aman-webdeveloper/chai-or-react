import React, { useRef } from "react"; // import useRef

function RefExample() {
  const inputRef = useRef(null); // reference to input element

  const focusInput = () => {
    inputRef.current.focus(); // focus the input
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default RefExample;
