import { Button,} from "@mui/material"

import React, { useEffect, useState } from "react";




export const Seconds = () => {

  const [seconds, setSeconds] = useState(0);
  
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => { 
    let interval = null;
    if (isRunning) {
      interval= setInterval(() => {
        setSeconds (prev => prev + 1); 
      }, 1000);
    } else if (!isRunning && interval !== null) {
     clearInterval (interval);
    }
         return () => clearInterval (interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {

    setIsRunning(false);
    setSeconds(0);

   
  };


  return (
    <div class="text-center m-5 p-4">
      <h1 className="text-4x1 font-bold mb-4">{seconds} seconds</h1>
      <div className="space-x-2">
        <Button onClick={handleStart} variant="contained">Start</Button>
        <Button onClick={handleStop} variant="contained">Stop</Button>
        <Button onClick={handleReset} variant="contained">Reset</Button>
      </div>
    </div>
  )
};



