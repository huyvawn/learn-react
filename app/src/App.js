// import logo from './logo.svg';
// import './session4.css'
import './huy.css'
import { approaches } from './data-approach';
import Approach from './approach';
import Featured from './feature-button';
import { FaStar } from 'react-icons/fa';
import clutchImg from './img/clutch-logo.png';
import { reviews } from './data-review';
import Review from './review';
import Process from './process';
import { processes } from './data-process';

function App() {
  const stars = Array.from({ length:5}, (_,index) => (
    <FaStar key={index} color={1 > index ? 'red': '#e4e5e9'} />
));

  return (
    <>
    <div className='bg-radient'>
    <div className='container' id='work-with-us' >
      <div id='intro'>
      <h5>WORK WITH US</h5>
      <h1>You name it, <span>we've done worse.</span></h1>
      <h4>
      From websites and apps to CMS, intranets... Wait, we haven't done anything but websites.. Anyway, we have a multitude of projects under our belt.
     </h4>
     </div>

     <Featured />  
     </div>
     </div>
     <div className='container-fluid'>
     <div className='row' id='approach'>
        <h1>Our approach to <span className='text-gradient'>working on digital solutions</span></h1>
        {approaches.map(
          (approach)=> ( <Approach title={approach.title} content={approach.content} /> )
          )}  
     </div>
     <div id="review-section">
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
              <div className='col-md'>
              <img src={clutchImg} alt="clutchLogo" id='clutch-logo' />
              </div>
              <div className='col-md' id='star-rating'>
                
              {stars}  &nbsp; 1.0 (9 reviews)
              
              </div>
              </div>
            </div>
            <div className='col-md-6 text-end align-self-center'>
             <a href="https://clutch.co"> <button id='go-to-clutch'>Go to Clutch</button> </a>
            </div>
          </div>
          <div className='row'>
          <Review comment={reviews.user1.comment} name={reviews.user1.name} work={reviews.user1.work} rating={reviews.user1.rating} />
          <Review comment={reviews.user2.comment} name={reviews.user2.name} work={reviews.user2.work} rating={reviews.user2.rating} />
          <Review {...reviews.user3} />
          </div>
     </div>
     <div className='text-center' id='process'>
      <h4>Our process</h4>
      <h1>Outstanding digital <span className='text-gradient'>solutions in 4 steps</span></h1>
      <div className='row process-row'>
        
          <div className='border-fade steps step1'>
            <h1>Step 1</h1>
          </div>
        
        <div className='col-md-5 text-start process-right' >
          <Process {...processes.step1}/>
        </div>
      </div>
      <div className='row process-row-reverse'>
          <div className='border-fade steps step2'>
            <h1>Step 2</h1>
          </div>
          <div className='col-md-5 text-start process-left'>
            <Process {...processes.step2}/>
          </div>
      </div>
      <div className='row process-row'>
          <div className='border-fade steps step1'>
            <h1>Step 3</h1>
          </div>
          <div className='col-md-5 text-start process-right'>
            <Process {...processes.step3} />
          </div>
      </div>
      <div className='row process-row-reverse'>
          <div className='border-fade steps step2'>
            <h1>Step 4</h1>
          </div>
          <div className='col-md-5 text-start process-left'>
            <Process {...processes.step4} />
          </div>
      </div>
     </div>
     </div>
     </>
  );
}


export default App;

