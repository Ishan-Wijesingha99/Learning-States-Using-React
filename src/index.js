import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './components/Counter';
import { GoingOut } from './components/GoingOut';
import { StateComponent } from './components/StateComponent';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <StateComponent />

      <Counter />

      <GoingOut />
  </React.StrictMode>
)







// Challenge

// const greeting = function(name) {
//   const currentHour = new Date().getHours() + 1;
//   console.log(name);
//   console.log(currentHour);
//   if(currentHour >= 5 && currentHour <= 12 ) {
//       console.log(`Good morning ${name}`);
//   } else if(currentHour >= 13 && currentHour <= 17) {
//       console.log(`Good afternoon ${name}`);
//   } else if(currentHour >= 18 && currentHour <= 20) {
//       console.log(`Good evening ${name}`);
//   } else if((currentHour >= 21 && currentHour <= 24) || (currentHour >=1 && currentHour <= 3)) {
//     console.log(`Good night ${name}`);
//   }
// }

// greeting('Mark')







