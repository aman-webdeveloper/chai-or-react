// import React, { useState } from "react";

// function StateCounter() {
//   const [count, setCount] = useState(0); // state variable

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

// export default StateCounter;

import React, { useState } from "react";

export default function StateCounter() {
  const [count, setCount] = useState(0); // declare state variable

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">State Counter</h2>
      <p className="text-lg mb-3">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded mr-2"
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );
}
