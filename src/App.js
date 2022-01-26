import React from 'react'
import { useState } from 'react'
function App(){
// The useState function has returned two variables: counter and changeCounter
// The counter variable is equal to 1, because that is what we passed into useState
// The changeCounter function can be used to change the counter variable.
// We will get a better idea of what it does in a moment.
  let [ counter, changeCounter ] = useState(1)
  // invoke changeCounter, so we can watch declarative rendering at work.
  window.changeCounter = changeCounter
  // Put counter, which we defined in the previous step, on the page.
  // You can edit the JSX and display the name however you like.
  // Remember, you can interpolate JavaScript into JSX using {}.
  // If you wanted to interpolate the counter into an h1 tag, it might look something like this:
  return (
    <h1>{counter}</h1>,
    <h4>{counter}</h4>
  )
}

export default App;
// import logo from './logo.svg'; //importing logo from logo.svg file in src folder
// import './App.css'; 

// function App() {
//   return ( //returns page content 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React or Don't?!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
