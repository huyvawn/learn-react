import { animals } from './animals';
import React from 'react';
import {createRoot} from'react-dom/client';
import ocean from '../img/ocean.jpg';
// const container = document.getElementById('app');
// const root= createRoot(container);
function AnimalFacts(){

const title='';
const background= (<img 
className="background"
alt="ocean"
src={ocean}
/>);

let showBackground=true;

const images=[];
for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e){
  let selectedAnimal= e.target.alt;
  const option = Math.floor(Math.random()*animals[selectedAnimal].facts.length);
  const funFact = animals[selectedAnimal].facts[option];
  const factSection =  document.getElementById('fact');
  factSection.innerHTML = funFact;
}

    return (
  <div>
  <h1>{title || "Click an animal for a fun fact!"}</h1>
      {/* {showBackground && background} */}
      {background}
  <div className='animals' >
        {images}
    </div>    
    <p id='fact'> </p>
  </div>
  );
}
export default AnimalFacts;