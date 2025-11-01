import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addvalue = () =>{
    counter = counter + 1
    setCounter(counter)
  }

  const removevalue = () =>{
    counter = counter -1
    setCounter(counter)

  }


  return (
    <>
    <h1>hello hii </h1>
    <h2>counter value : {counter}</h2>

    <button 
    onClick={addvalue}>
      add value {counter}</button> <br />
    <button onClick={removevalue}>remove value {counter}</button><br />
    <p>fotter {counter}</p>
    </>
  )
}



export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   const [counter, setCounter]  = useState(15)

//   //let counter = 15

//   const addValue = () => {
//     //counter = counter + 1
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1 )
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
    
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
  
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add value {counter}</button> 
//       <br />
//       <button
//       onClick={removeValue}
//       >remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App