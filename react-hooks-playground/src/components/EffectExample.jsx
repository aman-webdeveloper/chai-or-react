import React, { useState, useEffect } from "react"; // import hooks

function EffectExample() {
  const [name, setName] = useState("Visitor"); // state to store name

  useEffect(() => {
    document.title = `Hello, ${name}`; // update document title when name changes
  }, [name]);

  return (
    <div>
      <h2>useEffect Example</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name..."
      />
      <p>Document title changes as you type.</p>
    </div>
  );
}

export default EffectExample;
