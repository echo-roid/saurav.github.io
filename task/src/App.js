import logo from './logo.svg';
import './App.css';
import gh from './frvideo.mp4';
import gh1 from './one1.mp4';
import gh2 from './two2.mp4';
import gh3 from './three3.mp4';
import React ,{useState} from  "react"
import ReactPlayer from 'react-player'

function App() {
  const [current, setCurrent] = useState(gh);   
  
  const one=()=>{
   setCurrent(gh)
  }

  const two=()=>{
    setCurrent(gh1)
   } 

 const three=()=>{
   setCurrent(gh2)
 }

  const four=()=>{
   setCurrent(gh3)
}

  return(


       <> 
    <div className="main">
   
           <div className="video-div">
           <ReactPlayer url={current} playing={true} / >      
             
 
             </div> 


             <div className = "button-click">

                  <button type="button" onClick = {one} >one </button>
                  <button type="button" onClick = {two}>two</button>
                  <button type="button" onClick = {three}>three</button>
                  <button type="button" onClick = {four} >four</button>
              
             </div>


             </div>
      </>
  )
}

export default App;